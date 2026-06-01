import { AppDataSource } from '../config/database'
import { Post, PostStatus, PostType } from '../entities/Post'

export class PostService {
  async createPost(
    title: string,
    slug: string,
    content: any,
    authorId: string,
    type: PostType = PostType.POST,
    status: PostStatus = PostStatus.DRAFT,
    commentsEnabled: boolean = true
  ) {
    const postRepository = AppDataSource.getRepository(Post)

    const existing = await postRepository.findOne({ where: { slug } })
    if (existing) {
      throw new Error('Post with this slug already exists')
    }

    const post = postRepository.create({
      title,
      slug,
      content,
      authorId,
      type,
      status,
      commentsEnabled,
    })

    return await postRepository.save(post)
  }

  async getAllPosts(status?: PostStatus, type?: PostType) {
    const postRepository = AppDataSource.getRepository(Post)
    const where: any = {}
    if (status) where.status = status
    if (type) where.type = type

    return await postRepository.find({
      where,
      relations: ['author'],
      order: { createdAt: 'DESC' },
    })
  }

  async getPostById(id: string) {
    const postRepository = AppDataSource.getRepository(Post)
    return await postRepository.findOne({
      where: { id },
      relations: ['author'],
    })
  }

  async getPostBySlug(slug: string) {
    const postRepository = AppDataSource.getRepository(Post)
    return await postRepository.findOne({
      where: { slug },
      relations: ['author'],
    })
  }

  async updatePost(id: string, updates: Partial<Post>) {
    const postRepository = AppDataSource.getRepository(Post)
    
    if (updates.slug) {
      const existing = await postRepository.findOne({ where: { slug: updates.slug } })
      if (existing && existing.id !== id) {
        throw new Error('Post with this slug already exists')
      }
    }

    await postRepository.update(id, updates)
    return await this.getPostById(id)
  }

  async deletePost(id: string) {
    const postRepository = AppDataSource.getRepository(Post)
    await postRepository.delete(id)
  }
}
