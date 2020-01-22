import { InfraModule } from '@app/infra/infra.module'
import { Module } from '@nestjs/common'
import { IssuesService } from './issues.service'

@Module({
  imports: [InfraModule],
  providers: [IssuesService],
  exports: [IssuesService],
})
export class IssuesModule {}
