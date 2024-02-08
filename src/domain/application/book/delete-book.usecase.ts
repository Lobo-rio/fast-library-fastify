import { Prisma } from "@prisma/client"

import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"
import { NotFoundError } from "@/helpers/errors/not-found-error"

export class DeleteBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(id: Prisma.BookWhereUniqueInput): Promise<void> {
    const bookExists = await this.bookRepository.findById(id)

    if (bookExists === null) throw new NotFoundError()

    await this.bookRepository.delete(id)
  }
}
