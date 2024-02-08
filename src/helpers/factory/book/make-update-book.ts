import { UpdateBookUseCase } from "@/domain/application/book/update-book.usecase"
import { BookRepository } from "@/infra/repositories/book.repository"

export function makeUpdateBookUseCase() {
  const bookRepository = new BookRepository()
  const updateBookUseCase = new UpdateBookUseCase(bookRepository)

  return updateBookUseCase
}
