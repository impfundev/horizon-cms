import { PGlite } from '@electric-sql/pglite'
import { DataSource } from 'typeorm'
import { PgliteDriver } from 'typeorm-pglite'

const db = new PGlite()

export const AppDataSource = new DataSource({
  type: 'pglite-custom',
  driver: PgliteDriver,
  database: db,
  entities: [__dirname + '/../entities/**/*{.js,.ts}'],
  synchronize: true,
  logging: false,
})
