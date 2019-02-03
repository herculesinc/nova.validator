"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = require("./Exception");
const util_1 = require("./util");
// VALIDATORS
// ================================================================================================
exports.validate = function (value, message) {
    if (value) {
        if (value instanceof Error)
            throw new Exception_1.Exception({
                message: message,
                status: util_1.HttpStatusCode.InternalServerError,
                cause: value,
                stackStart: exports.validate
            });
        return value;
    }
    else
        throw new Exception_1.Exception({
            message: message,
            status: util_1.HttpStatusCode.InternalServerError,
            stackStart: exports.validate
        });
};
// REQUEST
// ------------------------------------------------------------------------------------------------
exports.validate.request = function (value, messageOrDescriptorOrCode, code) {
    if (value) {
        if (value instanceof Error) {
            let message;
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
            throw new Exception_1.Exception({
                message: message,
                status: util_1.HttpStatusCode.BadRequest,
                code: code,
                cause: value,
                stackStart: exports.validate.request
            });
        }
        return value;
    }
    else {
        let message;
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
        throw new Exception_1.Exception({
            message: message,
            status: util_1.HttpStatusCode.BadRequest,
            code: code,
            stackStart: exports.validate.request
        });
    }
};
// AUTHORIZED
// ------------------------------------------------------------------------------------------------
exports.validate.authorized = function (value, message) {
    if (value) {
        if (value instanceof Error)
            throw new Exception_1.Exception({
                message: message,
                status: util_1.HttpStatusCode.Unauthorized,
                cause: value,
                stackStart: exports.validate.authorized
            });
        return value;
    }
    else
        throw new Exception_1.Exception({
            message: message,
            status: util_1.HttpStatusCode.Unauthorized,
            stackStart: exports.validate.authorized
        });
};
// INPUTS
// ------------------------------------------------------------------------------------------------
exports.validate.input = function (value, message) {
    if (value) {
        if (value instanceof Error)
            throw new Exception_1.Exception({
                message: message,
                status: util_1.HttpStatusCode.InvalidInputs,
                cause: value,
                stackStart: exports.validate.input
            });
        return value;
    }
    else
        throw new Exception_1.Exception({
            message: message,
            status: util_1.HttpStatusCode.InvalidInputs,
            stackStart: exports.validate.input
        });
};
//# sourceMappingURL=validator.js.map