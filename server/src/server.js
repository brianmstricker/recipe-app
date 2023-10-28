import Fastify from "fastify";
import recipesController from "./routes/recipesController.js";
import "dotenv/config";

const fastify = Fastify({
 logger: true,
});
fastify.register(recipesController, { prefix: "/recipes" });
const start = async () => {
 try {
  await fastify.listen({ port: 3000 });
 } catch (err) {
  fastify.log.error(err);
  process.exit(1);
 }
};
start();
