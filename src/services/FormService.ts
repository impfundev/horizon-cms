import { AppDataSource } from '../config/database'
import { Form } from '../entities/Form'
import { FormField, FieldType } from '../entities/FormField'

export class FormService {
  async createForm(title: string, description: string, createdById: string) {
    const formRepository = AppDataSource.getRepository(Form)

    const form = formRepository.create({
      title,
      description,
      createdById,
    })

    return await formRepository.save(form)
  }

  async addField(
    formId: string,
    type: FieldType,
    label: string,
    placeholder?: string,
    isRequired: boolean = false,
    options?: any[],
    order?: number
  ) {
    const fieldRepository = AppDataSource.getRepository(FormField)

    const field = fieldRepository.create({
      formId,
      type,
      label,
      placeholder,
      isRequired,
      options,
      order: order || 0,
    })

    return await fieldRepository.save(field)
  }

  async getFormById(id: string) {
    const formRepository = AppDataSource.getRepository(Form)
    return await formRepository.findOne({
      where: { id },
      relations: ['fields', 'createdBy'],
      order: { fields: { order: 'ASC' } },
    })
  }

  async getAllForms() {
    const formRepository = AppDataSource.getRepository(Form)
    return await formRepository.find({
      relations: ['createdBy'],
      order: { createdAt: 'DESC' },
    })
  }

  async updateForm(id: string, updates: Partial<Form>) {
    const formRepository = AppDataSource.getRepository(Form)
    await formRepository.update(id, updates)
    return await this.getFormById(id)
  }

  async deleteForm(id: string) {
    const formRepository = AppDataSource.getRepository(Form)
    await formRepository.delete(id)
  }

  async removeField(fieldId: string) {
    const fieldRepository = AppDataSource.getRepository(FormField)
    await fieldRepository.delete(fieldId)
  }

  async updateField(fieldId: string, updates: Partial<FormField>) {
    const fieldRepository = AppDataSource.getRepository(FormField)
    await fieldRepository.update(fieldId, updates)
    return await fieldRepository.findOne({ where: { id: fieldId } })
  }
}
