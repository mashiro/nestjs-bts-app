import { registerAs } from '@nestjs/config'

export const databaseConfig = registerAs('database', () => ({
  database: process.env.DATABASE_DATABASE || 'db/development.sqlite3',
}))
