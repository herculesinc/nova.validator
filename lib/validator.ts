// IMPORTS
// ================================================================================================
import { Validator, ErrorDescriptor } from '@nova/validator';
import { Exception } from './Exception';
import { HttpStatusCode } from './util';

// VALIDATORS
// ================================================================================================
export const validate: Validator = function(value: any, message?: string): any {
    if (value) {
        if (value instanceof Error) throw new Exception({
            message     : message,
            status      : HttpStatusCode.InternalServerError,
            cause       : value,
            stackStart  : validate
        });

        return value;
    }
    else throw new Exception({
        message     : message,
        status      : HttpStatusCode.InternalServerError,
        stackStart  : validate
    });
};

// REQUEST
// ------------------------------------------------------------------------------------------------
validate.request = function(value: any, messageOrDescriptorOrCode?: string | number | ErrorDescriptor, code?: number): any {
    if (value) {
        if (value instanceof Error) {
            let message: string;
            if (typeof messageOrDescriptorOrCode === 'string') {
                message = messageOrDescriptorOrCode;
            }
            else if (typeof messageOrDescriptorOrCode === 'number') {
                code = messageOrDescriptorOrCode;
            }
            else if (messageOrDescriptorOrCode) {
                code = messageOrDescriptorOrCode[0];
                message = messageOrDescriptorOrCode[1];
            }
            
            throw new Exception({
                message     : message,
                status      : HttpStatusCode.BadRequest,
                code        : code,
                cause       : value,
                stackStart  : validate.request
            });
        }

        return value;
    } 
    else {
        let message: string;
        if (typeof messageOrDescriptorOrCode === 'string') {
            message = messageOrDescriptorOrCode;
        }
        else if (typeof messageOrDescriptorOrCode === 'number') {
            code = messageOrDescriptorOrCode;
        }
        else if (messageOrDescriptorOrCode) {
            code = messageOrDescriptorOrCode[0];
            message = messageOrDescriptorOrCode[1];
        }

        throw new Exception({
            message     : message,
            status      : HttpStatusCode.BadRequest,
            code        : code,
            stackStart  : validate.request
        });
    }
};

// AUTHORIZED
// ------------------------------------------------------------------------------------------------
validate.authorized = function(value: any, message?: string): any {
    if (value) {
        if (value instanceof Error) throw new Exception({
            message     : message,
            status      : HttpStatusCode.Unauthorized,
            cause       : value,
            stackStart  : validate.authorized
        });

        return value;
    }
    else throw new Exception({
        message     : message,
        status      : HttpStatusCode.Unauthorized,
        stackStart  : validate.authorized
    });
};

// INPUTS
// ------------------------------------------------------------------------------------------------
validate.input = function(value: any, message?: string): any {
    if (value) {
        if (value instanceof Error) throw new Exception({
            message     : message,
            status      : HttpStatusCode.InvalidInputs,
            cause       : value,
            stackStart  : validate.input
        });

        return value;
    }
    else throw new Exception({
        message     : message,
        status      : HttpStatusCode.InvalidInputs,
        stackStart  : validate.input
    });
};