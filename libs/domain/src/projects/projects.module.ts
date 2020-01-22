import { InfraProjectsModule } from '@app/infra/projects/projects.module'
import { Module } from '@nestjs/common'
import { ProjectsService } from './projects.service'

@Module({
  imports: [InfraProjectsModule],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
