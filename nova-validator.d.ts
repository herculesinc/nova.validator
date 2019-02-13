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

    // EXCEPTION
    // --------------------------------------------------------------------------------------------
    export interface ExceptionOptions {
        name?       : string;
        status?     : number;
        message?    : string;
        code?       : number;
        cause?      : Error;
        stackStart? : Function;
    }

    export class Exception extends Error {

        readonly name           : string;
        readonly status         : number;
        readonly code?          : number;
        readonly cause?         : Error;
    
        headers?                : { [header: string]: string };

        readonly isClientError  : boolean;
        readonly isServerError  : boolean;

        constructor(options: ExceptionOptions);
        constructor(message: string, status?: number);

        toJSON(): any;
    }
}