import { Module } from '@nestjs/common'
import { IssuesModule } from './issues/issues.module'
import { ProjectsModule } from './projects/projects.module'

@Module({
  imports: [ProjectsModule, IssuesModule],
  exports: [ProjectsModule, IssuesModule],
})
export class DomainModule {}
