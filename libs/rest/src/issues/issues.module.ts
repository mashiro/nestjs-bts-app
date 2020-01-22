import { IssuesModule } from '@app/domain/issues/issues.module'
import { Module } from '@nestjs/common'
import { IssuesController } from './issues.controller'

@Module({
  imports: [IssuesModule],
  controllers: [IssuesController],
})
export class RestIssuesModule {}
