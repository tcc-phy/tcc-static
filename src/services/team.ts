import sbClient from "@/database/client";
import { Team } from "@/types/data.types";

export const getAllTeamMembers = async (): Promise<Team[]> => {
    const { data, error } = await sbClient
        .from("teams")
        .select("*");

    if (error) {
        throw new Error(error.message);
    }

    const teams: Team[] = (data ?? []).map((member) => {
        const socials = member.socials as Record<string, unknown> | null;

        const parsedSocials: Team["socials"] = {};

        if (socials && typeof socials === "object") {
            const linkedInUrl = socials["linkedInUrl"];
            const twitterUrl = socials["twitterUrl"];
            const instagramUrl = socials["instagramUrl"];

            if (typeof linkedInUrl === "string") {
                parsedSocials.linkedInUrl = linkedInUrl;
            }

            if (typeof twitterUrl === "string") {
                parsedSocials.twitterUrl = twitterUrl;
            }

            if (typeof instagramUrl === "string") {
                parsedSocials.instagramUrl = instagramUrl;
            }
        }

        return {
            id: member.id,
            name: member.name,
            profileImgUrl: member.profileImgUrl,
            teamName: member.teamName,
            socials: parsedSocials,
        };
    });

    return teams;
};

export {

}
