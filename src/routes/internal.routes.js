export default async function internalRoutes(fastify) {
  fastify.get("/health", async () => ({ status: "ok" }));

  fastify.get("/gateway/info", async () => ({
    name: "API Gateway",
    version: "1.0.0",
    servicesLoaded: fastify.config.SERVICES
  }));
}
