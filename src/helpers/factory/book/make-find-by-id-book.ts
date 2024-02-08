import { FindByIdBookUseCase } from "@/domain/application/book/find-by-id-book.usecase"
import { BookRepository } from "@/infra/repositories/book.repository"

export function makeFindByIdBookUseCase() {
  const bookRepository = new BookRepository()
  const findByIdBookUseCase = new FindByIdBookUseCase(bookRepository)

  return findByIdBookUseCase
}
