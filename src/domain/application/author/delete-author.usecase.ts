import { Prisma } from "@prisma/client"
import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"
import { NotFoundError } from "@/helpers/errors/not-found-error"

export class DeleteAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(id: Prisma.AuthorWhereUniqueInput): Promise<void> {
    const authorExists = await this.authorRepository.findById(id)

    if (authorExists === null) throw new NotFoundError()

    await this.authorRepository.delete(id)
  }
}
