"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// HTTP CODES
// ================================================================================================
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["Created"] = 201] = "Created";
    HttpStatusCode[HttpStatusCode["Accepted"] = 202] = "Accepted";
    HttpStatusCode[HttpStatusCode["NoContent"] = 204] = "NoContent";
    HttpStatusCode[HttpStatusCode["BadRequest"] = 400] = "BadRequest";
    HttpStatusCode[HttpStatusCode["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCode[HttpStatusCode["InvalidInputs"] = 402] = "InvalidInputs";
    HttpStatusCode[HttpStatusCode["Forbidden"] = 403] = "Forbidden";
    HttpStatusCode[HttpStatusCode["NotFound"] = 404] = "NotFound";
    HttpStatusCode[HttpStatusCode["NotAllowed"] = 405] = "NotAllowed";
    HttpStatusCode[HttpStatusCode["NotAcceptable"] = 406] = "NotAcceptable";
    HttpStatusCode[HttpStatusCode["PayloadTooLarge"] = 413] = "PayloadTooLarge";
    HttpStatusCode[HttpStatusCode["UnsupportedContent"] = 415] = "UnsupportedContent";
    HttpStatusCode[HttpStatusCode["NotReady"] = 425] = "NotReady";
    HttpStatusCode[HttpStatusCode["TooManyRequests"] = 429] = "TooManyRequests";
    HttpStatusCode[HttpStatusCode["InternalServerError"] = 500] = "InternalServerError";
    HttpStatusCode[HttpStatusCode["NotImplemented"] = 501] = "NotImplemented";
    HttpStatusCode[HttpStatusCode["ServiceUnavailable"] = 503] = "ServiceUnavailable";
})(HttpStatusCode = exports.HttpStatusCode || (exports.HttpStatusCode = {}));
exports.HttpCodeNames = new Map([
    [200, 'OK'],
    [201, 'Created'],
    [202, 'Accepted'],
    [204, 'No Content'],
    [400, 'Bad Request'],
    [401, 'Unauthorized'],
    [402, 'Invalid Inputs'],
    [403, 'Forbidden'],
    [404, 'Not Found'],
    [405, 'Method Not Allowed'],
    [406, 'Not Acceptable'],
    [413, 'Payload Too Large'],
    [415, 'Unsupported Media Type'],
    [425, 'Not Ready'],
    [429, 'Too Many Requests'],
    [500, 'Internal Server Error'],
    [501, 'Not Implemented'],
    [503, 'Service Unavailable'],
]);
//# sourceMappingURL=util.js.map