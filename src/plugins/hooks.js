import fp from "fastify-plugin";
import { routeConfig } from "../config/routeConfig.js";
import { matchPath } from "../utils/routeMatcher.js";

export default fp(async (fastify) => {

  fastify.addHook("onRequest", async (req, reply) => {
    const path = req.raw.url;

    req.routeSettings = {
      isPublic: matchPath(path, routeConfig.public)
    };
  });

  fastify.addHook("onRequest", async (req, reply) => {
    if (req.routeSettings.isPublic) return;

    try {
      const token = req.headers.authorization?.replace("Bearer ", "");
      if (!token) {
        return reply.status(401).send({ error: "Missing token" });
      }

      const user = fastify.jwt.verify(token);
      req.user = user;
    } catch (err) {
      fastify.log.warn("JWT invalid", err);
      return reply.status(401).send({ error: "Invalid token" });
    }
  });
});
