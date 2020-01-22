import { IssuesRepositoryToken } from '@app/domain/issues/issues.repository'
import { DatabaseModule } from '@app/infra/database/database.module'
import { Module, Provider } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Issue, Project } from '../database/entities'
import { IssuesRepositoryImpl } from './issues.repository'

const IssuesRepositoryProvider: Provider = {
  provide: IssuesRepositoryToken,
  useClass: IssuesRepositoryImpl,
}

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Issue, Project])],
  providers: [IssuesRepositoryProvider],
  exports: [IssuesRepositoryProvider],
})
export class InfraIssuesModule {}
