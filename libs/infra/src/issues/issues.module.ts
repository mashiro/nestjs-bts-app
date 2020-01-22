import { IssuesRepositoryToken } from '@app/domain/issues/issues.repository'
import { DatabaseModule } from '@app/infra/database/database.module'
import { Module, Provider } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Issue } from '../database/entities'
import { IssuesRepositoryImpl } from './issues.repository'

const IssuesRepositoryProvider: Provider = {
  provide: IssuesRepositoryToken,
  useClass: IssuesRepositoryImpl,
}

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([Issue])],
  providers: [IssuesRepositoryProvider],
  exports: [IssuesRepositoryProvider],
})
export class InfraIssuesModule {}
