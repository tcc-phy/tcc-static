import { getLatestIssue, getAllSocieties } from "@/services";
import HomePageClient from "./client";

const IssuePage = async () => {
    const [latestIssue, societies] = await Promise.all([
        await getLatestIssue(),
        await getAllSocieties(),
    ]);

    return (
        <>
            <HomePageClient latestIssue={latestIssue} societies={societies} />
        </>
    );
};

export default IssuePage;

export const revalidate = 60;
