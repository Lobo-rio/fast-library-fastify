import { FastifyRequest, FastifyReply } from "fastify"
import { makeFindManyAuthorUseCase } from "@/helpers/factory/author/make-find-many-author"

export async function FindManyAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const findManyAuthor = makeFindManyAuthorUseCase()

    const authors = await findManyAuthor.execute()

    return reply.status(200).send(authors)
  } catch (error) {
    if (error) {
      return reply
        .status(500)
        .send({ message: `Internal server error! ${error}` })
    }

    throw error
  }
}
