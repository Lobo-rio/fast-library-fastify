import { DeleteBookUseCase } from "@/domain/application/book/delete-book.usecase"
import { BookRepository } from "@/infra/repositories/book.repository"

export function makeDeleteBookUseCase() {
  const bookRepository = new BookRepository()
  const deleteBookUseCase = new DeleteBookUseCase(bookRepository)

  return deleteBookUseCase
}
