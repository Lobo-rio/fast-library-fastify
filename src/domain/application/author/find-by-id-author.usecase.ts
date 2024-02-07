import { Author, Prisma } from "@prisma/client"
import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"

export class FindByIdAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(id: Prisma.AuthorWhereUniqueInput): Promise<Author | null> {
    return await this.authorRepository.findById(id)
  }
}
