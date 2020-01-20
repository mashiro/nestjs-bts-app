import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { databaseConfig } from './database.config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'
import { Project, Issue } from './entities'

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
        entities: [Project, Issue],
        synchronize: true,
        logging: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
