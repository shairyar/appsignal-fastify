import appsignal from "./appsignal.js"
import fastify from 'fastify'
const server = fastify()

server.get('/ping', async (request, reply) => {
  // Necessary AppSignal setup for custom instrumentation
  // https://docs.appsignal.com/nodejs/instrumentation/instrumentation.html
  const tracer = appsignal.tracer();
  const rootSpan = tracer.rootSpan();
  rootSpan.setName("GET /ping"); // Name of the route that will appear in AppSignal
  rootSpan.close();
  
  return 'pong\n'
})

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
