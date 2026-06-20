import TeamPageClient from "./client";
import { getAllTeamMembers } from "@/services";

const IssuePage = async () => {
    const team = await getAllTeamMembers();

    return (
        <>
            <TeamPageClient team={team} />
        </>
    );
};

export default IssuePage;
