import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { NotFoundError } from "@/helpers/errors/not-found-error"
import { makeUpdateBookUseCase } from "@/helpers/factory/book/make-update-book"

export async function UpdateBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateParamSchema = z.object({
    id: z.string(),
  })

  const updateDataSchema = z.object({
    title: z.string(),
    content: z.string(),
    published: z.boolean(),
  })

  const { id } = updateParamSchema.parse(request.params)
  const { title, content, published } = updateDataSchema.parse(request.body)

  try {
    const updateBook = makeUpdateBookUseCase()

    const book = await updateBook.execute({ id }, { title, content, published })

    return reply.status(200).send(book)
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
