import { AppDataSource } from '../config/database'
import { Submission } from '../entities/Submission'
import { SubmissionValue } from '../entities/SubmissionValue'
import { FormField } from '../entities/FormField'
import CryptoJS from 'crypto-js'
import { ENCRYPTION_KEY } from '../config/env'

export class SubmissionService {
  async createSubmission(formId: string, values: { fieldId: string; value: any }[], ipHash?: string) {
    const submissionRepository = AppDataSource.getRepository(Submission)
    const valueRepository = AppDataSource.getRepository(SubmissionValue)

    const submission = submissionRepository.create({
      formId,
      ipHash,
    })

    const savedSubmission = await submissionRepository.save(submission)

    const submissionValues = values.map((v) => {
      const encryptedValue = CryptoJS.AES.encrypt(String(v.value), ENCRYPTION_KEY).toString()
      return valueRepository.create({
        submissionId: savedSubmission.id,
        fieldId: v.fieldId,
        value: encryptedValue,
      })
    })

    await valueRepository.save(submissionValues)

    return await this.getSubmissionById(savedSubmission.id)
  }

  async getSubmissionById(id: string) {
    const submissionRepository = AppDataSource.getRepository(Submission)
    return await submissionRepository.findOne({
      where: { id },
      relations: ['values', 'values.field'],
    })
  }

  async getSubmissionsByFormId(formId: string) {
    const submissionRepository = AppDataSource.getRepository(Submission)
    return await submissionRepository.find({
      where: { formId },
      relations: ['values', 'values.field'],
      order: { submittedAt: 'DESC' },
    })
  }

  async decryptValue(encryptedValue: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedValue, ENCRYPTION_KEY)
    return bytes.toString(CryptoJS.enc.Utf8)
  }

  async exportSubmissionsAsCSV(formId: string, formTitle: string, fields: FormField[]) {
    const submissions = await this.getSubmissionsByFormId(formId)

    const headers = ['Submitted At', ...fields.map((f) => f.label)]
    const rows = submissions.map((s) => {
      const row: any[] = [s.submittedAt.toISOString()]
      fields.forEach((field) => {
        const valueEntry = s.values.find((v) => v.fieldId === field.id)
        const decryptedValue = valueEntry ? this.decryptValue(valueEntry.value) : ''
        row.push(decryptedValue)
      })
      return row
    })

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','))
      .join('\n')

    return csvContent
  }

  async deleteSubmission(id: string) {
    const submissionRepository = AppDataSource.getRepository(Submission)
    await submissionRepository.delete(id)
  }
}
