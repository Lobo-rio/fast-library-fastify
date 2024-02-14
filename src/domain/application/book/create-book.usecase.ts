import { Book } from "@prisma/client"

import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"

interface bookRequest {
  authorId: string
  title: string
  content: string
  published: boolean
}

export class CreateBookUseCase {
  constructor(private readonly bookRepository: BookAbstractRepository) {}
  async execute(data: bookRequest): Promise<Book> {
    return await this.bookRepository.create(data)
  }
}
