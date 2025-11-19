import Fastify from "fastify";
import { corsConfig } from "./config/cors.js";
import { rateLimitConfig } from "./config/rateLimit.js";
import { env } from "./config/env.js";

import jwtPlugin from "./plugins/jwt.js";
import hooksPlugin from "./plugins/hooks.js";
import proxyPlugin from "./plugins/proxy.js";
import internalRoutes from "./routes/internal.routes.js";

export async function buildApp() {
  const fastify = Fastify({
    logger: true
  });

  fastify.decorate("config", env);

  fastify.register(import("@fastify/cors"), corsConfig);
  fastify.register(import("@fastify/rate-limit"), rateLimitConfig);

  fastify.register(jwtPlugin);
  fastify.register(hooksPlugin);

  fastify.register(internalRoutes);
  fastify.register(proxyPlugin);

  return fastify;
}
