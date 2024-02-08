import { Author, Prisma } from "@prisma/client"

import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"
import { NotFoundError } from "@/helpers/errors/not-found-error"

export class FindByEmailAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(email: Prisma.AuthorWhereUniqueInput): Promise<Author | null> {
    const authorExists = await this.authorRepository.findByEmail(email)

    if (authorExists === null) throw new NotFoundError()

    return await this.authorRepository.findByEmail(email)
  }
}
