import { IssuesModule } from '@app/domain/issues/issues.module'
import { ProjectsModule } from '@app/domain/projects/projects.module'
import { Module } from '@nestjs/common'
import { ProjectsResolver } from './projects.resolver'

@Module({
  imports: [ProjectsModule, IssuesModule],
  providers: [ProjectsResolver],
})
export class GqlProjectsModule {}
