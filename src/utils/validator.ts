import { ValidationResult } from "@/types/core.types";
import * as z from "zod";

const schemas = {
    review: z.object({
        issueId: z.uuid(),
        authorName: z
            .string()
            .min(2, "Author name cannot be less than 2 characters.")
            .max(31, "Author name cannot be more than 31 characters."),
        content: z
            .string()
            .min(10, "Review cannot be less than 10 characters.")
            .max(1000, "Review cannot be more than 1000 characters.")
    })
}

const validator = <T>(
    schema: z.ZodSchema<T>,
    input: unknown
): ValidationResult<T> => {
    const result = schema.safeParse(input);

    if (result.success) {
        return {
            success: true,
            data: result.data,
        };
    }

    return {
        success: false,
        issues: result.error.issues.map(issue => {
            const path = issue.path.join('.') || 'form';
            return `${path}: ${issue.message}`;
        }),
    };
}

export default validator;
export {
    schemas as validationSchemas
};
