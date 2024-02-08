import { Book, Prisma } from "@prisma/client"

import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"
import { NotFoundError } from "@/helpers/errors/not-found-error"

export class FindByIdBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(id: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    const bookExists = await this.bookRepository.findById(id)

    if (bookExists === null) throw new NotFoundError()

    return await this.bookRepository.findById(id)
  }
}
