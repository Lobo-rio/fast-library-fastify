import { Author, Prisma } from "@prisma/client"

import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"
import { ConflictError } from "@/helpers/errors/conflict-error"

export class CreateAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(data: Prisma.AuthorCreateInput): Promise<Author> {
    const authorExists = await this.authorRepository.findByEmail({
      email: data.email,
    })

    if (authorExists) throw new ConflictError()

    return await this.authorRepository.create(data)
  }
}
