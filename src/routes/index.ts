import { Elysia, t } from "elysia";
import { db } from "../db";
import { users } from "../db/schema";

export const userRoutes = new Elysia({ prefix: "/users" })
  .get("/", async () => {
    const allUsers = await db.select().from(users);
    return allUsers;
  })
  .post(
    "/",
    async ({ body }) => {
      const result = await db.insert(users).values(body);
      return { message: "User created", insertId: result[0].insertId };
    },
    {
      body: t.Object({
        name: t.String(),
        email: t.String(),
      }),
    }
  );
