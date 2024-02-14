import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"
import { Author, Prisma } from "@prisma/client"

import { clientRedis } from "@/core/redis/redis.provider"
import { prismaProvider } from "../database/prisma.provider"

export class AuthorRepository implements AuthorAbstractRepository {
  async findById(id: Prisma.AuthorWhereUniqueInput): Promise<Author | null> {
    return await prismaProvider.author.findUnique({
      where: id,
    })
  }

  async findByEmail(
    email: Prisma.AuthorWhereUniqueInput,
  ): Promise<Author | null> {
    return await prismaProvider.author.findUnique({
      where: email,
    })
  }

  async findMany(): Promise<Author[]> {
    let authors = await clientRedis.get("authorsMany")

    if (!authors) {
      authors = await prismaProvider.author.findMany()
      await clientRedis.setEx("authorsMany", 3, JSON.stringify(authors))
    }

    return authors
  }

  async create(data: Prisma.AuthorCreateInput): Promise<Author> {
    const author = await prismaProvider.author.create({
      data,
    })

    return author
  }

  async update(
    where: Prisma.AuthorWhereUniqueInput,
    data: Prisma.AuthorUpdateInput,
  ): Promise<Author> {
    const author = await prismaProvider.author.update({ data, where })
    return author
  }

  async delete(where: Prisma.AuthorWhereUniqueInput): Promise<void> {
    await prismaProvider.author.delete({ where })
  }
}
