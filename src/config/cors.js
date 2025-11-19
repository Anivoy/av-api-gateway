import { env } from "./env.js";

export const corsConfig = {
  origin: [env.CLIENT_URL],
  methods: ['GET','POST','PUT','PATCH','DELETE'],
  allowedHeaders: ['Authorization','Content-Type']
};