import { AppDataSource } from '../config/database'
import { User } from '../entities/User'
import { Role } from '../entities/Role'
import bcrypt from 'bcryptjs'

export class UserService {
  async createUser(username: string, email: string, password: string, roleId?: string) {
    const userRepository = AppDataSource.getRepository(User)
    
    const existingUser = await userRepository.findOne({
      where: [{ email }, { username }],
    })

    if (existingUser) {
      throw new Error('User already exists')
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = userRepository.create({
      username,
      email,
      passwordHash,
      roleId,
    })

    return await userRepository.save(user)
  }

  async findByEmail(email: string) {
    const userRepository = AppDataSource.getRepository(User)
    return await userRepository.findOne({
      where: { email },
      relations: ['role'],
    })
  }

  async findById(id: string) {
    const userRepository = AppDataSource.getRepository(User)
    return await userRepository.findOne({
      where: { id },
      relations: ['role'],
    })
  }

  async validatePassword(user: User, password: string): Promise<boolean> {
    return await bcrypt.compare(password, user.passwordHash)
  }

  async getAllUsers() {
    const userRepository = AppDataSource.getRepository(User)
    return await userRepository.find({ relations: ['role'] })
  }

  async updateUser(id: string, updates: Partial<User>) {
    const userRepository = AppDataSource.getRepository(User)
    await userRepository.update(id, updates)
    return await this.findById(id)
  }

  async deleteUser(id: string) {
    const userRepository = AppDataSource.getRepository(User)
    await userRepository.delete(id)
  }
}
