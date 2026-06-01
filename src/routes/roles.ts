import { Hono } from 'hono'
import { authMiddleware } from '../middleware/auth'
import { RoleService } from '../services/RoleService'

const roleService = new RoleService()

export const roleRoutes = new Hono()

roleRoutes.get('/', authMiddleware(), async (c) => {
  try {
    const roles = await roleService.getAllRoles()
    return c.json(roles)
  } catch (error: any) {
    return c.json({ error: error.message }, 500)
  }
})

roleRoutes.post('/', authMiddleware(), async (c) => {
  try {
    const { name, permissions } = await c.req.json()
    const role = await roleService.createRole(name, permissions)
    return c.json(role, 201)
  } catch (error: any) {
    return c.json({ error: error.message }, 400)
  }
})

roleRoutes.get('/:id', authMiddleware(), async (c) => {
  try {
    const id = c.req.param('id')
    const role = await roleService.getRoleById(id)
    if (!role) {
      return c.json({ error: 'Role not found' }, 404)
    }
    return c.json(role)
  } catch (error: any) {
    return c.json({ error: error.message }, 500)
  }
})

roleRoutes.patch('/:id', authMiddleware(), async (c) => {
  try {
    const id = c.req.param('id')
    const updates = await c.req.json()
    const role = await roleService.updateRole(id, updates)
    if (!role) {
      return c.json({ error: 'Role not found' }, 404)
    }
    return c.json(role)
  } catch (error: any) {
    return c.json({ error: error.message }, 400)
  }
})

roleRoutes.delete('/:id', authMiddleware(), async (c) => {
  try {
    const id = c.req.param('id')
    await roleService.deleteRole(id)
    return c.json({ success: true })
  } catch (error: any) {
    return c.json({ error: error.message }, 500)
  }
})
