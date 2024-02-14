import { Book, Prisma } from "@prisma/client"

import { BookAbstractRepository } from "@/domain/enterprise/book/book-abstract.repository"
import { prismaProvider } from "../database/prisma.provider"
import { RedisService } from "@/core/redis/redis.service"

const redis = new RedisService()

export class BookRepository implements BookAbstractRepository {
  async findById(id: Prisma.BookWhereUniqueInput): Promise<Book | null> {
    return await prismaProvider.book.findUnique({
      where: id,
    })
  }

  async findMany(): Promise<Book[]> {
    const booksRedis = await redis.get("booksMany")

    if (!booksRedis) {
      const books = await prismaProvider.book.findMany()
      await redis.set("booksMany", JSON.stringify(books), "EX", 10)
      console.log("From database!")
      return books
    }

    console.log("From cache!")
    return JSON.parse(booksRedis)
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
