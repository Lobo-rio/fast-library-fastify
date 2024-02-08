import { Book, Prisma } from "@prisma/client"
import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"

export class UpdateBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(
    id: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book | null> {
    return await this.bookRepository.update(id, data)
  }
}
