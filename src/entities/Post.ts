import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './User'

export enum PostStatus {
  DRAFT = 'draft',
  PUBLISHED = 'published',
  ARCHIVED = 'archived',
}

export enum PostType {
  POST = 'post',
  PAGE = 'page',
}

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column({ unique: true })
  slug: string

  @Column({ type: 'jsonb' })
  content: any

  @Column({ type: 'enum', enum: PostType, default: PostType.POST })
  type: PostType

  @Column({ type: 'enum', enum: PostStatus, default: PostStatus.DRAFT })
  status: PostStatus

  @ManyToOne(() => User)
  @JoinColumn({ name: 'author_id' })
  author: User

  @Column({ nullable: true })
  authorId: string

  @Column({ default: true })
  commentsEnabled: boolean

  @CreateDateColumn()
  createdAt: Date

  @CreateDateColumn()
  updatedAt: Date
}
