import { InfraModule } from '@app/infra/infra.module'
import { Module } from '@nestjs/common'
import { ProjectsService } from './projects.service'

@Module({
  imports: [InfraModule],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}
