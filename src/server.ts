import fastify from "fastify";
import { env } from "./env";
import { transactiosRoutes } from "./routes/transactions";

const app = fastify();

app.register(transactiosRoutes, {
  prefix: "transactions",
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Node Running");
  });
