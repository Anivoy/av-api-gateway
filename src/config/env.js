import dotenv from "dotenv"
dotenv.config()

export const env = {
  PORT: parseInt(process.env.PORT) || 8080,
  CLIENT_URLS: process.env.CLIENT_URLS || "http://localhost:5173,http://localhost:3000",

  JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY,
  JWT_ALGO: process.env.JWT_ALGO || "RS256",

  SERVICES: {
    AUTH: process.env.SERVICE_AUTH_URL,
    SCENE: process.env.SERVICE_SCENE_URL,
    GAME: process.env.SERVICE_GAME_URL,
  },
}
