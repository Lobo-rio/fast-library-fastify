import * as redis from "redis"

export const clientRedis = redis.createClient()

clientRedis.connect()
