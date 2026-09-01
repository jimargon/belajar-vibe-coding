import { Elysia } from "elysia";
import { userRoutes } from "./routes";

const PORT = Number(process.env.PORT ?? 3000);

const app = new Elysia()
  .get("/", () => ({ status: "OK", message: "Server is running" }))
  .use(userRoutes)
  .listen(PORT);

console.log(`🦊 Elysia server running at http://localhost:${app.server?.port}`);
