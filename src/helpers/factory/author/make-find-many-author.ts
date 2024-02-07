import { FindManyAuthorUseCase } from "@/domain/application/author/find-many-author.usecase"
import { AuthorRepository } from "@/infra/repositories/author.repository"

export function makeFindManyAuthorUseCase() {
  const authorRepository = new AuthorRepository()
  const findManyAuthorUseCase = new FindManyAuthorUseCase(authorRepository)

  return findManyAuthorUseCase
}
