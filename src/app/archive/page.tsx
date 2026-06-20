import ArchivePageClient from "./client";
import { getAllIssues, getAllTags } from "@/services";

const ArchivePage = async () => {
    const [issues, allTags] = await Promise.all([
        await getAllIssues(),
        await getAllTags(),
    ]);

    return (
        <>
            <ArchivePageClient issues={issues} allTags={allTags} />
        </>
    );
};

export default ArchivePage;

export const revalidate = 60;
