import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { UserService } from '../services/UserService'
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/env'

const userService = new UserService()

export const authRoutes = new Hono()

authRoutes.post('/login', async (c) => {
  try {
    const { email, password } = await c.req.json()

    if (!email || !password) {
      return c.json({ error: 'Email and password are required' }, 400)
    }

    const user = await userService.findByEmail(email)
    if (!user) {
      return c.json({ error: 'Invalid credentials' }, 401)
    }

    const isValid = await userService.validatePassword(user, password)
    if (!isValid) {
      return c.json({ error: 'Invalid credentials' }, 401)
    }

    const token = await sign(
      {
        userId: user.id,
        email: user.email,
        roleId: user.roleId,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    )

    return c.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        roleId: user.roleId,
      },
    })
  } catch (error: any) {
    return c.json({ error: error.message }, 500)
  }
})

authRoutes.get('/logout', async (c) => {
  return c.json({ success: true, message: 'Logged out successfully' })
})
