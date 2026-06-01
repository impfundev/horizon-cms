import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Form } from './Form'

export enum FieldType {
  TEXT = 'text',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
}

@Entity('form_fields')
export class FormField {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(() => Form, (form) => form.fields, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'form_id' })
  form: Form

  @Column()
  formId: string

  @Column({ type: 'enum', enum: FieldType })
  type: FieldType

  @Column()
  label: string

  @Column({ nullable: true })
  placeholder: string

  @Column({ default: false })
  isRequired: boolean

  @Column({ type: 'jsonb', nullable: true })
  options: any[]

  @Column({ default: 0 })
  order: number

  @CreateDateColumn()
  createdAt: Date
}
