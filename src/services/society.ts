import sbClient from "@/database/client";
import { Society } from "@/types/data.types";

const getAllSocieties = async (): Promise<Society[]> => {
    const { data, error } = await sbClient
        .from("societies")
        .select("*")

    if (error) {
        throw new Error(`Failed to fetch societies: ${error.message}`);
    }

    return data;
}

export {
    getAllSocieties
};
