import rawContent from "@/config/content.json";
import { ParsedContent, RawContent } from "@/types/data.types";

let parsedContent: ParsedContent | null = null;

const getContent = (): ParsedContent => {
    if (parsedContent) {
        return parsedContent;
    }

    const data = rawContent as RawContent;

    parsedContent = {
        ...data,
        issues: data.issues.map((issue) => {
            let releaseDate: Date;

            try {
                releaseDate = new Date(issue.releaseDate);
            } catch (error) {
                throw new Error(`ERROR: Failed to correctly parse releaseDate for issueId: ${issue.id}`);
            }

            return {
                ...issue,
                releaseDate
            }
        })
    };

    return parsedContent;
}

export default getContent;
