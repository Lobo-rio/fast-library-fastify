import { Book, Prisma } from "@prisma/client"

export abstract class BookAbstractRepository {
  abstract findById(id: Prisma.BookWhereUniqueInput): Promise<Book | null>
  abstract findMany(): Promise<Book[]>
  abstract create(data: Prisma.BookCreateInput): Promise<Book>
  abstract update(
    id: Prisma.BookWhereUniqueInput,
    data: Prisma.BookUpdateInput,
  ): Promise<Book>
  abstract delete(id: Prisma.BookWhereUniqueInput): Promise<void>
}
