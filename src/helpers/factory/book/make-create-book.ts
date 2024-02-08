import { CreateBookUseCase } from "@/domain/application/book/create-book.usecase"
import { BookRepository } from "@/infra/repositories/book.repository"

export function makeCreateBookUseCase() {
  const bookRepository = new BookRepository()
  const createBookUseCase = new CreateBookUseCase(bookRepository)

  return createBookUseCase
}
