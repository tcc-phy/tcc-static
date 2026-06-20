import { getLatestIssue, getAllSocieties } from "@/services";
import HomePageClient from "./client";

const IssuePage = async () => {
    const latestIssue = await getLatestIssue();
    const societies = await getAllSocieties();

    return (
        <>
            <HomePageClient latestIssue={latestIssue} societies={societies} />
        </>
    );
};

export default IssuePage;
