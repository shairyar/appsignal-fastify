"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodejs_1 = require("@appsignal/nodejs");
exports.default = new nodejs_1.Appsignal({
    active: true,
    name: "appsignal-fastify",
    pushApiKey: "PUSH-API-KEY",
    logPath: "logs",
    logLevel: "trace"
});
