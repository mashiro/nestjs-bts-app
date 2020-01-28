import { IssuesModule } from '@app/domain/issues/issues.module'
import { ProjectsModule } from '@app/domain/projects/projects.module'
import { Module } from '@nestjs/common'
import { IssuesResolver } from './issues.resolver'

@Module({
  imports: [IssuesModule, ProjectsModule],
  providers: [IssuesResolver],
})
export class GqlIssuesModule {}
