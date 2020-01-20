import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { ProjectsModule } from './projects/projects.module'
import { IssuesModule } from './issues/issues.module'

@Module({
  imports: [DatabaseModule, ProjectsModule, IssuesModule],
})
export class InfraModule {}
