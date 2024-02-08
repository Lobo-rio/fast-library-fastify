import { Author, Prisma } from "@prisma/client"
import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"

export class UpdateAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(
    id: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author | null> {
    return await this.authorRepository.update(id, data)
  }
}
