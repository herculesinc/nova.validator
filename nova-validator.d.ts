declare module "@nova/validator" {
    
    // VALIDATOR
    // --------------------------------------------------------------------------------------------
    export type ErrorDescriptor = [number, string];
    export type Validant<T> = T | Error | undefined | null | false;

    export interface Validator {
        <T>(value: Validant<T>, message?: string): T;

        request<T>      (value: Validant<T>, message?: string, code?: number): T;
        request<T>      (value: Validant<T>, descriptor: ErrorDescriptor): T;

        input<T>        (value: Validant<T>, message?: string): T;
        authorized<T>   (value: Validant<T>, message?: string): T;
    }

    export const validate: Validator;
}