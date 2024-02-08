import { Book } from "@prisma/client"
import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"

export class FindManyBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(): Promise<Book[]> {
    return await this.bookRepository.findMany()
  }
}
