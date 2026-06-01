import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Submission } from './Submission'
import { FormField } from './FormField'

@Entity('submission_values')
export class SubmissionValue {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Submission, (submission) => submission.values, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'submission_id' })
  submission: Submission

  @Column()
  submissionId: string

  @ManyToOne(() => FormField)
  @JoinColumn({ name: 'field_id' })
  field: FormField

  @Column({ nullable: true })
  fieldId: string

  @Column({ type: 'text' })
  value: string

  @CreateDateColumn()
  createdAt: Date
}
