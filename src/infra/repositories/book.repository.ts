import { Book, Prisma } from "@prisma/client"

import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"
import { prismaProvider } from "../database/prisma.provider"

export class BookRepository implements BookAbstractRepository {
  async findById(id: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    return await prismaProvider.book.findUnique({
      where: id,
    })
  }

  async findMany(): Promise<Book[]> {
    const books = await prismaProvider.book.findMany()
    return books
  }

  async create(data: Prisma.BookCreateInput): Promise<Book> {
    const book = await prismaProvider.book.create({
      data,
    })

    return book
  }

  async update(
    where: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book> {
    const book = await prismaProvider.book.update({ data, where })
    return book
  }

  async delete(where: Prisma.BookWhereUniqueInput): Promise<void> {
    await prismaProvider.book.delete({ where })
  }
}
