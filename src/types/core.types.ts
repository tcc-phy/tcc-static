import { ServiceErrorCode } from "./service.types";

type ValidationSuccess<T> = {
    success: true;
    data: T;
};

type ValidationFailure = {
    success: false;
    issues: string[];
};

export type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

export type ServiceResolve<T> =
    | {
        success: true,
        data: T
    }
    | {
        success: false;
        errorCode: ServiceErrorCode;
        errorMessage?: string;
    }
