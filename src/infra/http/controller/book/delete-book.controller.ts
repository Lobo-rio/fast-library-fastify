import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { NotFoundError } from "@/helpers/errors/not-found-error"
import { makeDeleteBookUseCase } from "@/helpers/factory/book/make-delete-book"

export async function DeleteBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteSchema = z.object({
    id: z.string(),
  })

  const { id } = deleteSchema.parse(request.params)

  try {
    const deleteBook = makeDeleteBookUseCase()

    await deleteBook.execute({ id })

    return reply.status(200).send()
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
