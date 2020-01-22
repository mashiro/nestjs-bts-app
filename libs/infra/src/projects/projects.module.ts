import { ProjectsRepositoryToken } from '@app/domain/projects/projects.repository'
import { Module, Provider } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Project } from '../database/entities'
import { ProjectsRepositoryImpl } from './projects.repository'

const ProjectsRepositoryProvider: Provider = {
  provide: ProjectsRepositoryToken,
  useClass: ProjectsRepositoryImpl,
}

@Module({
  imports: [TypeOrmModule.forFeature([Project])],
  providers: [ProjectsRepositoryProvider],
  exports: [ProjectsRepositoryProvider],
})
export class ProjectsModule {}
