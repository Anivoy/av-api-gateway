import { env } from "./env.js";

export const corsConfig = {
  origin: env.CLIENT_URLS.split(",").map((url) => url?.trim()),
  methods: ['GET','POST','PUT','PATCH','DELETE'],
  allowedHeaders: ['Authorization','Content-Type'],
  credentials: true
};