import { buildApp } from "./app.js";
import { env } from "./config/env.js";

const start = async () => {
  const fastify = await buildApp();

  try {
    await fastify.listen({
      port: env.PORT,
      host: "0.0.0.0"
    });
    console.log(`API Gateway running on port ${env.PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
