import { InfraIssuesModule } from '@app/infra/issues/issues.module'
import { Module } from '@nestjs/common'
import { IssuesService } from './issues.service'

@Module({
  imports: [InfraIssuesModule],
  providers: [IssuesService],
  exports: [IssuesService],
})
export class IssuesModule {}
