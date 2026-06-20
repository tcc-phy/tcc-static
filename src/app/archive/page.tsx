import ArchivePageClient from "./client";
import { getAllIssues, getAllTags } from "@/services";

const ArchivePage = async () => {
    const issues = await getAllIssues();
    const allTags = await getAllTags();

    return (
        <>
            <ArchivePageClient issues={issues} allTags={allTags} />
        </>
    );
};

export default ArchivePage;
