import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { databaseConfig } from '@app/infra/database/database.config'
import { TypeOrmModule } from '@nestjs/typeorm'
import * as path from 'path'
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule.forFeature(databaseConfig)],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService
      ): Promise<SqliteConnectionOptions> => ({
        type: 'sqlite',
        database: configService.get<string>('database.database'),
        entities: [path.join(__dirname, '/../**/*.entity.ts')],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
