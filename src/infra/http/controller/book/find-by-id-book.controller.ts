import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { makeFindByIdBookUseCase } from "@/helpers/factory/book/make-find-by-id-book"
import { NotFoundError } from "@/helpers/errors/not-found-error"

export async function FindByIdBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findByIdschema = z.object({
    id: z.string(),
  })

  const { id } = findByIdschema.parse(request.params)

  try {
    const findByIdBook = makeFindByIdBookUseCase()

    const book = await findByIdBook.execute({ id })

    return reply.status(200).send(book)
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
