import { CreateAuthorUseCase } from "@/domain/application/author/create-author.usecase"
import { AuthorRepository } from "@/infra/repositories/author.repository"

export function makeCreateAuthorUseCase() {
  const authorRepository = new AuthorRepository()
  const createAuthorUseCase = new CreateAuthorUseCase(authorRepository)

  return createAuthorUseCase
}
