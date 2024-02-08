import { UpdateAuthorUseCase } from "@/domain/application/author/update-author.usecase"
import { AuthorRepository } from "@/infra/repositories/author.repository"

export function makeUpdateAuthorUseCase() {
  const authorRepository = new AuthorRepository()
  const updateAuthorUseCase = new UpdateAuthorUseCase(authorRepository)

  return updateAuthorUseCase
}
