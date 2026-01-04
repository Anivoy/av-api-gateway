import { env } from "./env.js"

export const services = [
  {
    name: "auth",
    baseUrl: env.SERVICES.AUTH,
    routes: [{ prefix: "/auth", target: "/api/v1/auth" }],
  },

  {
    name: "game",
    baseUrl: env.SERVICES.GAME,
    routes: [
      { prefix: "/game", target: "/api/v1/game" },
      { prefix: "/game-mode", target: "/api/v1/game-mode" },
      { prefix: "/result", target: "/api/v1/result" },
    ],
  },

  {
    name: "scene",
    baseUrl: env.SERVICES.SCENE,
    routes: [
      { prefix: "/scene", target: "/api/v1/scene" },
      { prefix: "/genre", target: "/api/v1/genre" },
      { prefix: "/season", target: "/api/v1/season" },
      { prefix: "/show", target: "/api/v1/show" },
      { prefix: "/difficulty", target: "/api/v1/difficulty" },
      { prefix: "/region", target: "/api/v1/region" },
      { prefix: "/prefecture", target: "/api/v1/prefecture" },
      { prefix: "/city", target: "/api/v1/city" },
    ],
  },
]
