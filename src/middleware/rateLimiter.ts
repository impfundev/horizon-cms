import { Hono } from 'hono'
import { bearerAuth } from 'hono/bearer-auth'

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

export const rateLimiter = (limit: number = 100, windowMs: number = 60000) => {
  return async (c: any, next: () => Promise<void>) => {
    const ip = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown'
    const now = Date.now()
    const record = rateLimitMap.get(ip)

    if (!record || now > record.resetTime) {
      rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    } else {
      record.count++
      if (record.count > limit) {
        return c.json({ error: 'Too many requests' }, 429)
      }
    }

    await next()
  }
}
