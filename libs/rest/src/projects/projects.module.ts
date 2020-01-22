import { ProjectsModule } from '@app/domain/projects/projects.module'
import { Module } from '@nestjs/common'
import { RestProjectsController } from './projects.controller'

@Module({
  imports: [ProjectsModule],
  controllers: [RestProjectsController],
})
export class RestProjectsModule {}
