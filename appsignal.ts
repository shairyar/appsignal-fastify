import { Appsignal } from "@appsignal/nodejs";

export default new Appsignal({
  active: true,
  name: "appsignal-fastify",
  pushApiKey: "PUSH-API-KEY",
  logPath: "logs",
  logLevel: "trace"
});
