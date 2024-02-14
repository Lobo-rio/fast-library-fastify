import { Redis } from "ioredis"

export class RedisService extends Redis {
  constructor() {
    super()

    super.on("error", (error) => {
      console.log("Error no Redis")
      console.log(error)
      process.exit(1)
    })

    super.on("connect", () => {
      console.log("Redis connected!")
    })
  }
}
