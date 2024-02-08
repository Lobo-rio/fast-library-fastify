import { Prisma } from "@prisma/client"
import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"

export class DeleteBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(id: Prisma.BookWhereUniqueInput): Promise<void> {
    await this.bookRepository.delete(id)
  }
}
