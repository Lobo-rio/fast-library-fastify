import { FastifyRequest, FastifyReply } from "fastify"
import { makeFindManyBookUseCase } from "@/helpers/factory/book/make-find-many-book"

export async function FindManyBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const findManyBook = makeFindManyBookUseCase()

    const books = await findManyBook.execute()

    return reply.status(200).send(books)
  } catch (error) {
    if (error) {
      return reply.status(500).send({ message: "Internal server error" })
    }

    throw error
  }
}
