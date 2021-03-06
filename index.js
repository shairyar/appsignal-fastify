"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const appsignal_js_1 = __importDefault(require("./appsignal.js"));
const fastify_1 = __importDefault(require("fastify"));
const server = (0, fastify_1.default)();
server.get("/ping", async (request, reply) => {
    // Necessary AppSignal setup for custom instrumentation
    // https://docs.appsignal.com/nodejs/instrumentation/instrumentation.html
    const tracer = appsignal_js_1.default.tracer();
    const rootSpan = tracer.rootSpan();
    rootSpan.setName("GET /ping"); // Name of the route that will appear in AppSignal
    const data = {
        cars: {
            Nissan: [
                { model: "Sentra", doors: 4 },
                { model: "Maxima", doors: 4 },
                { model: "Skyline", doors: 2 },
            ],
            Ford: [
                { model: "Taurus", doors: 4 },
                { model: "Escort", doors: 4 },
            ],
        },
    };
    rootSpan.setSampleData("custom_data", { cars: data });
    rootSpan.close();
    return "pong\n";
});
server.listen(8080, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
