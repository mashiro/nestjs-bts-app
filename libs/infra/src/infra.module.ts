import { Module } from '@nestjs/common'
import { InfraIssuesModule } from './issues/issues.module'
import { InfraProjectsModule } from './projects/projects.module'

@Module({
  imports: [InfraProjectsModule, InfraIssuesModule],
  exports: [InfraProjectsModule, InfraIssuesModule],
})
export class InfraModule {}
