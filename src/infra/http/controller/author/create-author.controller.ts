import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { NotFoundError } from "@/helpers/errors/not-found-error"
import { makeCreateAuthorUseCase } from "@/helpers/factory/author/make-create-author"

export async function FindByIdAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const createSchema = z.object({
    name: z.string(),
    email: z.string().email(),
  })

  const { name, email } = createSchema.parse(request.params)

  try {
    const createAuthor = makeCreateAuthorUseCase()

    const author = await createAuthor.execute({ name, email })

    return reply.status(200).send(author)
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
