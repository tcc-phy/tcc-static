import ArchivePageClient from "./client";
import contentStore from "@/data/content";

const IssuePage = async () => {
    const issues = contentStore.getAllIssues();
    const allTags = contentStore.getAllTags();

    return (
        <>
            <ArchivePageClient issues={issues} allTags={allTags} />
        </>
    );
};

export default IssuePage;
