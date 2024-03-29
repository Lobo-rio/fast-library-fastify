import { FastifyInstance } from "fastify"
import { FindByIdAuthorController } from "./controller/author/find-by-id-author.controller"
import { FindByEmailAuthorController } from "./controller/author/find-by-email-author.controller"
import { FindManyAuthorController } from "./controller/author/find-many-author.controller"
import { CreateAuthorController } from "./controller/author/create-author.controller"
import { UpdateAuthorController } from "./controller/author/update-author.controller"
import { DeleteAuthorController } from "./controller/author/delete-author.controller"

export async function RoutesAuthor(app: FastifyInstance) {
  app.get("/authors", FindManyAuthorController)
  app.get("/authors/:id", FindByIdAuthorController)
  app.get("/authors/email/:email", FindByEmailAuthorController)
  app.post("/authors", CreateAuthorController)
  app.patch("/authors/:id", UpdateAuthorController)
  app.delete("/authors/:id", DeleteAuthorController)
}
