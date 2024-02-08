import { Book, Prisma } from "@prisma/client"
import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"

export class FindByIdBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(id: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    return await this.bookRepository.findById(id)
  }
}
