import { NextRequest, NextResponse } from "next/server";
import validator, { validationSchemas } from "@/utils/validator";
import { addReview } from "@/services/review";
import { ServiceErrorCode } from "@/types/service.types";


const POST = async (req: NextRequest): Promise<NextResponse> => {
    let body;

    try {
        body = await req.json();
    } catch (error) {
        return NextResponse.json(
            { message: "Invalid request body." },
            { status: 429 }
        );
    }

    const validationResult = validator(validationSchemas.review, body);
    if (!validationResult.success) {
        return NextResponse.json(
            {
                message: "Invalid request body.",
                issues: validationResult.issues
            },
            { status: 400 }
        );
    }

    const serviceResponse = await addReview({
        issueId: validationResult.data.issueId,
        authorName: validationResult.data.authorName,
        rating: validationResult.data.rating,
        content: validationResult.data.content
    });

    if (!serviceResponse.success) {
        switch (serviceResponse.errorCode) {
            case ServiceErrorCode.ISSUE_NOT_FOUND:
                return NextResponse.json(
                    {
                        message: serviceResponse.errorMessage ??
                            "Issue does not exist."
                    },
                    { status: 404 }
                );

            case ServiceErrorCode.DB_ERROR:
            case ServiceErrorCode.SERVER_ERROR:
            default:
                return NextResponse.json(
                    { message: "Internal Error.", },
                    { status: 400 }
                );
        }
    }

    return NextResponse.json(
        { ...serviceResponse.data },
        { status: 201 }
    );
}

export {
    POST
};
