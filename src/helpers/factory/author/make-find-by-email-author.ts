import { FindByEmailAuthorUseCase } from "@/domain/application/author/find-by-email-author.usecase"
import { AuthorRepository } from "@/infra/repositories/author.repository"

export function makeFindByEmailAuthorUseCase() {
  const authorRepository = new AuthorRepository()
  const findByEmailAuthorUseCase = new FindByEmailAuthorUseCase(
    authorRepository,
  )

  return findByEmailAuthorUseCase
}
