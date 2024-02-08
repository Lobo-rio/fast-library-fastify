import { FastifyInstance } from "fastify"
import { FindByIdAuthorController } from "./controller/author/find-by-id-author.controller"
import { FindManyAuthorController } from "./controller/author/find-many-author.controller"
import { CreateAuthorController } from "./controller/author/create-author.controller"
import { UpdateAuthorController } from "./controller/author/update-author.controller"

export async function RoutesAuthor(app: FastifyInstance) {
  app.get("/authors", FindManyAuthorController)
  app.get("/authors/:id", FindByIdAuthorController)
  app.post("/authors", CreateAuthorController)
  app.patch("/authors/:id", UpdateAuthorController)
  //app.delete("/authors/:id", DeleteAuthorController)
}
