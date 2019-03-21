declare module "@nova/validator" {
    
    // VALIDATOR
    // --------------------------------------------------------------------------------------------
    export type ErrorDescriptor = [number, string];

    export interface Validator {
        <T>(value: T | Error, message?: string): T;

        request<T>      (value: T | Error, message?: string, code?: number): T;
        request<T>      (value: T | Error, descriptor: ErrorDescriptor): T;

        input<T>        (value: T | Error, message?: string): T;
        authorized<T>   (value: T | Error, message?: string): T;
    }

    export const validate: Validator;
}