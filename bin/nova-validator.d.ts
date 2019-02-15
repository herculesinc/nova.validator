declare module "@nova/validator" {
    
    // VALIDATOR
    // --------------------------------------------------------------------------------------------
    export type ErrorDescriptor = [number, string];

    export interface Validator {
        <T>(value: T, message?: string): T;

        request<T>      (value: T, message?: string, code?: number): T;
        request<T>      (value: T, descriptor: ErrorDescriptor): T;

        input<T>        (value: T, message?: string): T;
        authorized<T>   (value: T, message?: string): T;
    }

    export const validate: Validator;
}