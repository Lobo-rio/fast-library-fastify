import { Author } from "@prisma/client"
import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"

export class FindManyAuthorUseCase {
  constructor(private readonly authorRepository: AuthorAbstractRepository) {}
  async execute(): Promise<Author[]> {
    return await this.authorRepository.findMany()
  }
}
