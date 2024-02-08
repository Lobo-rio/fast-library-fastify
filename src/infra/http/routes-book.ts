import { FastifyInstance } from "fastify"

import { FindManyAuthorController } from "./controller/author/find-many-author.controller"

export async function RoutesAuthor(app: FastifyInstance) {
  app.get("/authors", FindManyAuthorController)
}
