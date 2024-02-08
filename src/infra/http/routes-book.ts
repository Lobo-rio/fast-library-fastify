import { FastifyInstance } from "fastify"

import { FindManyBookController } from "./controller/book/find-many-book.controller"
import { FindByIdBookController } from "./controller/book/find-by-id-book.controller"

export async function RoutesBook(app: FastifyInstance) {
  app.get("/books", FindManyBookController)
  app.get("/books/:id", FindByIdBookController)
}
