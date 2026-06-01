import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { User } from './User'
import { FormField } from './FormField'

@Entity('forms')
export class Form {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  title: string

  @Column({ nullable: true })
  description: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  createdBy: User

  @Column({ nullable: true })
  createdById: string

  @Column({ default: true })
  isActive: boolean

  @OneToMany(() => FormField, (field) => field.form, { cascade: true })
  fields: FormField[]

  @CreateDateColumn()
  createdAt: Date

  @CreateDateColumn()
  updatedAt: Date
}
