import sbClient from "@/database/client";
import sbAdmin from "@/database/admin";
import { TablesInsert } from "@/types/supabase";
import type { ReviewStatus, Review } from "@/types/data.types";
import { ServiceResolve } from "@/types/core.types";
import { ServiceErrorCode } from "@/types/service.types";


const getAllReviewsByIssueId = async (issueId: string): Promise<Review[]> => {
    const { data, error } = await sbClient
        .from("reviews")
        .select("*")
        .eq("issueId", issueId)
        .order("createdAt", { ascending: false });

    if (error) {
        throw new Error(`Failed to fetch reviews for issue ${issueId}: ${error.message}`);
    }

    return (data ?? []).map((review) => {
        return {
            ...review,
            createdAt: new Date(review.createdAt)
        };
    });
};

type addReviewInput = {
    issueId: string;
    authorName: string;
    rating: number;
    content?: string;
}

const addReview = async ({
    issueId,
    authorName,
    rating,
    content
}: addReviewInput): Promise<ServiceResolve<{
    message: string;
}>> => {
    const { data: issue, error: issueError } = await sbAdmin
        .from("issues")
        .select("id")
        .eq("id", issueId)
        .maybeSingle();

    if (issueError) {
        return {
            success: false,
            errorCode: ServiceErrorCode.DB_ERROR,
            errorMessage: `Failed to add review: ${issueError.message}`
        };
    }

    if (!issue) {
        return {
            success: false,
            errorCode: ServiceErrorCode.ISSUE_NOT_FOUND,
            errorMessage: "Issue does not exist."
        };
    }

    const payload: TablesInsert<"reviews"> = {
        issueId,
        authorName,
        rating,
        content: content ?? "",
        status: "PENDING",
        createdAt: new Date().toISOString(),
    };

    const { data, error } = await sbAdmin
        .from("reviews")
        .insert(payload)
        .select("*")
        .single();

    if (error) {
        return {
            success: false,
            errorCode: ServiceErrorCode.DB_ERROR,
            errorMessage: `Failed to add review: ${error.message}`
        };
    }

    if (!data) {
        return {
            success: false,
            errorCode: ServiceErrorCode.DB_ERROR,
            errorMessage: "Unknown DB error."
        };
    }

    return {
        success: true,
        data: {
            message: "Thank you for sharing your feedback."
        }
    }
};

export {
    getAllReviewsByIssueId,
    addReview
};
