import { Hono } from 'hono'
import { jwt } from 'hono/jwt'
import { JWT_SECRET } from '../config/env'

export const authMiddleware = () => {
  return jwt({
    secret: JWT_SECRET,
  })
}
