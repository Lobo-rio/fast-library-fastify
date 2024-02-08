import { Author, Prisma } from "@prisma/client"

import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"
import { NotFoundError } from "@/helpers/errors/not-found-error"

export class UpdateAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(
    id: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author | null> {
    const authorExists = await this.authorRepository.findById(id)

    if (authorExists === null) throw new NotFoundError()

    return await this.authorRepository.update(id, data)
  }
}
