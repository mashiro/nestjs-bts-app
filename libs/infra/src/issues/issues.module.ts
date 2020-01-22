import { IssuesRepositoryToken } from '@app/domain/issues/issues.repository'
import { Module, Provider } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Issue } from '../database/entities'
import { IssuesRepositoryImpl } from './issues.repository'

const IssuesRepositoryProvider: Provider = {
  provide: IssuesRepositoryToken,
  useClass: IssuesRepositoryImpl,
}

@Module({
  imports: [TypeOrmModule.forFeature([Issue])],
  providers: [IssuesRepositoryProvider],
  exports: [IssuesRepositoryProvider],
})
export class IssuesModule {}
