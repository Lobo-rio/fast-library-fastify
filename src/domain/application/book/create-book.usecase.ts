import { Book, Prisma } from "@prisma/client"

import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"

export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(data: Prisma.BookCreateInput): Promise<Book> {
    return await this.bookRepository.create(data)
  }
}
