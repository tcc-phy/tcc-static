import contentStore from "@/data/content";
import HomePageClient from "./client";

const IssuePage = async () => {
    const latestIssue = contentStore.getLatestIssue()!;
    const societies = contentStore.getAllSocieties();

    return (
        <>
            <HomePageClient latestIssue={latestIssue} societies={societies} />
        </>
    );
};

export default IssuePage;
