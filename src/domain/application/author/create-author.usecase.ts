import { Author, Prisma } from "@prisma/client"
import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"

export class CreateAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(data: Prisma.AuthorCreateInput): Promise<Author> {
    return await this.authorRepository.create(data)
  }
}
