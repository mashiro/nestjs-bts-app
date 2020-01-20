import { Module } from '@nestjs/common'
import { ProjectsModule } from './projects/projects.module'
import { IssuesModule } from './issues/issues.module'

@Module({
  imports: [ProjectsModule, IssuesModule],
})
export class DomainModule {}
