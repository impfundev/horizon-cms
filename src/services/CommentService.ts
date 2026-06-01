import { AppDataSource } from '../config/database'
import { Comment, CommentStatus } from '../entities/Comment'

export class CommentService {
  async createComment(
    postId: string,
    authorName: string,
    content: string,
    authorEmail?: string,
    ipHash?: string
  ) {
    const commentRepository = AppDataSource.getRepository(Comment)

    const comment = commentRepository.create({
      postId,
      authorName,
      content,
      authorEmail,
      ipHash,
      status: CommentStatus.PENDING,
    })

    return await commentRepository.save(comment)
  }

  async getCommentsByPostId(postId: string, status?: CommentStatus) {
    const commentRepository = AppDataSource.getRepository(Comment)
    const where: any = { postId }
    if (status) where.status = status

    return await commentRepository.find({
      where,
      order: { createdAt: 'DESC' },
    })
  }

  async updateCommentStatus(id: string, status: CommentStatus) {
    const commentRepository = AppDataSource.getRepository(Comment)
    await commentRepository.update(id, { status })
    return await this.getCommentById(id)
  }

  async getCommentById(id: string) {
    const commentRepository = AppDataSource.getRepository(Comment)
    return await commentRepository.findOne({ where: { id } })
  }

  async deleteComment(id: string) {
    const commentRepository = AppDataSource.getRepository(Comment)
    await commentRepository.delete(id)
  }

  async getAllComments(status?: CommentStatus) {
    const commentRepository = AppDataSource.getRepository(Comment)
    const where: any = {}
    if (status) where.status = status

    return await commentRepository.find({
      where,
      relations: ['post'],
      order: { createdAt: 'DESC' },
    })
  }
}
