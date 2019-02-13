declare module "@nova/validator" {
    
    // VALIDATOR
    // --------------------------------------------------------------------------------------------
    export type ErrorDescriptor = [number, string];

    export interface BaseValidator {
        (value: any, message?: string): any;
    }
    
    export interface DescriptorValidator {
        (value: any, message?: string, code?: number): any;
        (value: any, descriptor: ErrorDescriptor): any;
    }
    
    export interface Validator extends BaseValidator {
        request?    : DescriptorValidator;
        input?      : BaseValidator;
        authorized? : BaseValidator;
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

    export class Exception {

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