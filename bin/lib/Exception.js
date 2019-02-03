"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
// BASE EXCEPTION CLASS
// ================================================================================================
class Exception extends Error {
    constructor(messageOrOptions, status) {
        if (typeof messageOrOptions === 'string') {
            super(messageOrOptions);
            this.status = (typeof status !== 'number' || status < 400 || status > 599)
                ? util_1.HttpStatusCode.InternalServerError : status;
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            super(messageOrOptions.message);
            status = messageOrOptions.status;
            this.status = (typeof status !== 'number' || status < 400 || status > 599)
                ? util_1.HttpStatusCode.InternalServerError : status;
            this.code = messageOrOptions.code;
            this.cause = messageOrOptions.cause;
            if (this.cause) {
                this.message = this.message
                    ? `${this.message}: ${this.cause.message}`
                    : this.cause.message;
            }
            Error.captureStackTrace(this, messageOrOptions.stackStart || this.constructor);
        }
        this.name = util_1.HttpCodeNames.get(this.status) || 'Unknown Error';
    }
    // PUBLIC MEMBERS
    // --------------------------------------------------------------------------------------------
    get isClientError() {
        return (this.status >= 400 && this.status < 500);
    }
    get isServerError() {
        return (this.status >= 500 && this.status < 600);
    }
    toJSON() {
        return {
            name: this.name,
            code: this.code,
            message: this.message
        };
    }
}
exports.Exception = Exception;
//# sourceMappingURL=Exception.js.map