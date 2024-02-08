import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { NotFoundError } from "@/helpers/errors/not-found-error"
import { makeFindByEmailAuthorUseCase } from "@/helpers/factory/author/make-find-by-email-author"

export async function FindByEmailAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findByEmailschema = z.object({
    email: z.string(),
  })

  const { email } = findByEmailschema.parse(request.params)

  try {
    const findByEmailAuthor = makeFindByEmailAuthorUseCase()

    const author = await findByEmailAuthor.execute({ email })

    return reply.status(200).send(author)
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
