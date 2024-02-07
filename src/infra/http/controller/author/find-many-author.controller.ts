import { z } from "zod"

import { FastifyRequest, FastifyReply } from "fastify"

export async function FindManyAuthorController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const findManyAuthor = makeFindManyAuthorUseCase()

    const authors = await findManyAuthor.execute()

    return reply.status(200).send(authors)
  } catch (error) {
    if (error) {
      return reply.status(500).send({ message: "Internal server error" })
    }

    throw error
  }
}
