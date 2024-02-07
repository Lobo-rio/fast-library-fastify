import { FindByIdAuthorUseCase } from "@/domain/application/author/find-by-id-author.usecase"
import { AuthorRepository } from "@/infra/repositories/author.repository"

export function makeFindByIdAuthorUseCase() {
  const authorRepository = new AuthorRepository()
  const findByIdAuthorUseCase = new FindByIdAuthorUseCase(authorRepository)

  return findByIdAuthorUseCase
}
