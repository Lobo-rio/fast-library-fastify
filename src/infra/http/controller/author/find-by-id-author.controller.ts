import { z } from "zod"

import { FastifyRequest, FastifyReply } from "fastify"
import { makeFindByIdAuthorUseCase } from "@/helpers/factory/author/make-find-by-id-author"
import { NotFoundError } from "@/helpers/errors/not-found-error"

export async function FindByIdAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findByIdschema = z.object({
    id: z.string(),
  })

  const { id } = findByIdschema.parse(request.params)

  try {
    const findByIdAuthor = makeFindByIdAuthorUseCase()

    const author = await findByIdAuthor.execute({ id })

    return reply.status(200).send(author)
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
