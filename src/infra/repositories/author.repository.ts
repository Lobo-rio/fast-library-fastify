import { AuthorAbstractRepository } from "@/domain/enterprise/author/author-abstract.repository"
import { Author, Prisma } from "@prisma/client"

import { prismaProvider } from "../database/prisma.provider"
import { RedisService } from "@/core/redis/redis.service"

const redis = new RedisService()

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
    const authorsRedis = await redis.get("authorsMany")

    if (!authorsRedis) {
      const authors = await prismaProvider.author.findMany()

      await redis.set("authorsMany", JSON.stringify(authors), "EX", 10)
      console.log("From database!")
      return authors
    }

    console.log("From cache!")
    return JSON.parse(authorsRedis)
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
