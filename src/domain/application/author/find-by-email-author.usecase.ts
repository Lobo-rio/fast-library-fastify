import { Author, Prisma } from "@prisma/client"
import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"

export class FindByEmailAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(email: Prisma.AuthorWhereUniqueInput): Promise<Author | null> {
    return await this.authorRepository.findByEmail(email)
  }
}
