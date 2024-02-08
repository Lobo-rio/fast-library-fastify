import { DeleteAuthorUseCase } from "@/domain/application/author/delete-author.usecase"
import { AuthorRepository } from "@/infra/repositories/author.repository"

export function makeDeleteAuthorUseCase() {
  const authorRepository = new AuthorRepository()
  const deleteAuthorUseCase = new DeleteAuthorUseCase(authorRepository)

  return deleteAuthorUseCase
}
