import { AppDataSource } from '../config/database'
import { Role } from '../entities/Role'

export class RoleService {
  async createRole(name: string, permissions: string[] = []) {
    const roleRepository = AppDataSource.getRepository(Role)
    
    const existingRole = await roleRepository.findOne({ where: { name } })
    if (existingRole) {
      throw new Error('Role already exists')
    }

    const role = roleRepository.create({ name, permissions })
    return await roleRepository.save(role)
  }

  async getAllRoles() {
    const roleRepository = AppDataSource.getRepository(Role)
    return await roleRepository.find()
  }

  async getRoleById(id: string) {
    const roleRepository = AppDataSource.getRepository(Role)
    return await roleRepository.findOne({ where: { id } })
  }

  async updateRole(id: string, updates: Partial<Role>) {
    const roleRepository = AppDataSource.getRepository(Role)
    await roleRepository.update(id, updates)
    return await this.getRoleById(id)
  }

  async deleteRole(id: string) {
    const roleRepository = AppDataSource.getRepository(Role)
    await roleRepository.delete(id)
  }
}
