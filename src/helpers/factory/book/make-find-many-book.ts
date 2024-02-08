import { FindManyBookUseCase } from "@/domain/application/book/find-many-book.usecase"
import { BookRepository } from "@/infra/repositories/book.repository"

export function makeFindManyBookUseCase() {
  const bookRepository = new BookRepository()
  const findManyBookUseCase = new FindManyBookUseCase(bookRepository)

  return findManyBookUseCase
}
