import { Prisma } from "@prisma/client"
import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"

export class DeleteAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(id: Prisma.AuthorWhereUniqueInput): Promise<void> {
    await this.authorRepository.delete(id)
  }
}
