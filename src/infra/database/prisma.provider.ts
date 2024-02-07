import { env } from "@/env"
import { PrismaClient } from "@prisma/client"

export const prismaProvider = new PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : [],
})
