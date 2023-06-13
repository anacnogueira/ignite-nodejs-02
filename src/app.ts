import fastify from "fastify";
import cookie from "@fastify/cookie";
import { transactiosRoutes } from "./routes/transactions";

export const app = fastify();

app.register(cookie);
app.register(transactiosRoutes, {
  prefix: "transactions",
});
