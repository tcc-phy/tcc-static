import sbClient from "@/database/client";
import { Issue, IssueFilled } from "@/types/data.types";

const getAllIssues = async (): Promise<Issue[]> => {
    const { data, error } = await sbClient
        .from("issues")
        .select("*")
        .order("releaseDate", { ascending: false });

    if (error) {
        throw new Error(`Failed to fetch all issues: ${error.message}`);
    }

    return (data ?? []).map((issue) => {
        return {
            ...issue,
            releaseDate: new Date(issue.releaseDate)
        }
    });
}

const getLatestIssue = async (): Promise<Issue | undefined> => {
    const { data, error } = await sbClient
        .from("issues")
        .select("*")
        .order("releaseDate", { ascending: false })
        .limit(1)
        .single();

    if (error) {
        throw new Error(`Failed to fetch latest issue: ${error.message}`);
    }

    if (!data) return;

    return {
        ...data,
        releaseDate: new Date(data.releaseDate)
    }
}

const getIssueBySlug = async (slug: string): Promise<IssueFilled | undefined> => {
    const { data, error } = await sbClient
        .from("issues")
        .select(`
      *,
      issuePages (*)
    `)
        .eq("slug", slug)
        .single();

    if (error) {
        throw new Error(error.message);
    }

    if (!data) return;

    return {
        ...data,
        releaseDate: new Date(data.releaseDate),
        pages: data.issuePages ?? []
    };
};

const getAllTags = async (): Promise<string[]> => {
    const { data, error } = await sbClient
        .from("issues")
        .select("tags");

    if (error) {
        throw new Error(`Failed to fetch all tags: ${error.message}`);
    }

    const allTags = new Set<string>();

    (data ?? []).forEach((issue) => {
        issue.tags?.forEach((tag) => allTags.add(tag));
    });

    return Array.from(allTags);
};


export {
    getLatestIssue,
    getIssueBySlug,
    getAllIssues,
    getAllTags,
};
