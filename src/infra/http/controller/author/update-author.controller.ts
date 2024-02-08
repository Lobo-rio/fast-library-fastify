import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { NotFoundError } from "@/helpers/errors/not-found-error"
import { makeUpdateAuthorUseCase } from "@/helpers/factory/author/make-update-author"

export async function UpdateAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const updateParamSchema = z.object({
    id: z.string(),
  })

  const updateDataSchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
  })

  const { id } = updateParamSchema.parse(request.params)
  const { name, email } = updateDataSchema.parse(request.body)

  try {
    const updateAuthor = makeUpdateAuthorUseCase()

    const author = await updateAuthor.execute({ id }, { name, email })

    return reply.status(200).send(author)
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
