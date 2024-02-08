import { z } from "zod"
import { FastifyRequest, FastifyReply } from "fastify"

import { NotFoundError } from "@/helpers/errors/not-found-error"
import { makeDeleteAuthorUseCase } from "@/helpers/factory/author/make-delete-author"

export async function DeleteAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const deleteSchema = z.object({
    id: z.string(),
  })

  const { id } = deleteSchema.parse(request.params)

  try {
    const deleteAuthor = makeDeleteAuthorUseCase()

    await deleteAuthor.execute({ id })

    return reply.status(200).send()
  } catch (error) {
    if (error instanceof NotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
