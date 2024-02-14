import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { NotFoundError } from "@/helpers/errors/not-found-error"
import { makeCreateBookUseCase } from "@/helpers/factory/book/make-create-book"

export async function CreateBookController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createSchema = z.object({
    authorId: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    published: z.boolean(),
  })

  const { authorId, title, content, published } = createSchema.parse(
    request.body,
  )

  try {
    const createBook = makeCreateBookUseCase()

    const book = await createBook.execute({
      authorId,
      title,
      content,
      published,
    })

    return reply.status(200).send(book)
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
