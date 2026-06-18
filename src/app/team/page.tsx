import contentStore from "@/data/content";
import TeamPageClient from "./client";

const IssuePage = async () => {
    const team = contentStore.getAllTeamMembers();

    return (
        <>
            <TeamPageClient team={team} />
        </>
    );
};

export default IssuePage;
