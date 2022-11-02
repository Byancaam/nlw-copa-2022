import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query"]
});

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  });

  // http://localhost:3333/o que colocamos depois da barra é o que queremos que seja chamado no get
  fastify.get("/pools/count", async () => {
    const count = await prisma.pool.count()
    return { count };
  });

  await fastify.listen({ port: 3333 });
}

bootstrap();
