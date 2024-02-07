import { Author, Prisma } from "@prisma/client"

export abstract class AuthorAbstractRepository {
  abstract findById(id: Prisma.AuthorWhereUniqueInput): Promise<Author | null>
  abstract findByEmail(
    email: Prisma.AuthorWhereUniqueInput,
  ): Promise<Author | null>
  abstract findMany(): Promise<Author[]>
  abstract create(data: Prisma.AuthorCreateInput): Promise<Author>
  abstract update(
    id: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author>
  abstract delete(id: Prisma.AuthorWhereUniqueInput): Promise<void>
}
