import fp from "fastify-plugin";
import proxy from "@fastify/http-proxy";
import { services } from "../config/services.js";

export default fp(async (fastify) => {

  fastify.addHook("preHandler", async (req, reply) => {
    if (!req.routeSettings?.isPublic && req.user) {
      req.headers["x-user-id"] = req.user.sub;
      req.headers["x-user-email"] = req.user.email;
      req.headers["x-user-role"] = req.user.role;
      req.headers["x-user-active"] = req.user.isActive;
      req.headers["x-user"] = JSON.stringify(req.user);
    }
  });

  const registrations = [];

  for (const service of services) {
    for (const route of service.routes) {
      const { prefix, target } = route;

      fastify.log.info(
        `Registering proxy: ${prefix} → ${service.baseUrl}${target}`
      );

      registrations.push(
        fastify.register(proxy, {
          prefix,
          upstream: service.baseUrl,
          rewritePrefix: target,
          http2: false,
        })
      );
    }
  }

  await Promise.all(registrations);
});
