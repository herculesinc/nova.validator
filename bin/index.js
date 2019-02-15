"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
// ================================================================================================
const core_1 = require("@nova/core");
// VALIDATORS
// ================================================================================================
exports.validate = function (value, message) {
    if (value) {
        if (value instanceof Error)
            throw new core_1.Exception({
                message: message,
                status: 500 /* InternalServerError */,
                cause: value,
                stackStart: exports.validate
            });
        return value;
    }
    else
        throw new core_1.Exception({
            message: message,
            status: 500 /* InternalServerError */,
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
            throw new core_1.Exception({
                message: message,
                status: 400 /* BadRequest */,
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
            message = 'Error messages not provided';
        }
        else if (messageOrDescriptorOrCode) {
            code = messageOrDescriptorOrCode[0];
            message = messageOrDescriptorOrCode[1];
        }
        else {
            message = 'Error messages not provided';
        }
        throw new core_1.Exception({
            message: message,
            status: 400 /* BadRequest */,
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
            throw new core_1.Exception({
                message: message,
                status: 401 /* Unauthorized */,
                cause: value,
                stackStart: exports.validate.authorized
            });
        return value;
    }
    else
        throw new core_1.Exception({
            message: message,
            status: 401 /* Unauthorized */,
            stackStart: exports.validate.authorized
        });
};
// INPUTS
// ------------------------------------------------------------------------------------------------
exports.validate.input = function (value, message) {
    if (value) {
        if (value instanceof Error)
            throw new core_1.Exception({
                message: message,
                status: 402 /* InvalidInputs */,
                cause: value,
                stackStart: exports.validate.input
            });
        return value;
    }
    else
        throw new core_1.Exception({
            message: message,
            status: 402 /* InvalidInputs */,
            stackStart: exports.validate.input
        });
};
//# sourceMappingURL=index.js.map