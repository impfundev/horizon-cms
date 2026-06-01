import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { Form } from './Form'
import { SubmissionValue } from './SubmissionValue'

@Entity('submissions')
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Form)
  @JoinColumn({ name: 'form_id' })
  form: Form

  @Column()
  formId: string

  @Column({ nullable: true })
  ipHash: string

  @OneToMany(() => SubmissionValue, (value) => value.submission, { cascade: true })
  values: SubmissionValue[]

  @CreateDateColumn()
  submittedAt: Date
}
