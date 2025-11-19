import fp from "fastify-plugin";
import fs from "fs";

export default fp(async (fastify) => {

  const publicKey = fs.readFileSync(fastify.config.JWT_PUBLIC_KEY, "utf8");

  fastify.register(import("@fastify/jwt"), {
    secret: {
      public: publicKey
    },
    decode: { complete: true },
    sign: { algorithm: fastify.config.JWT_ALGO },
    verify: { algorithms: ["RS256"] }
  });
});
