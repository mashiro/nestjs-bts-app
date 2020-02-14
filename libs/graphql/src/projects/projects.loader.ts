import { ProjectsService } from '@app/domain/projects/projects.service'
import { Injectable } from '@nestjs/common'
import { EntityLoader } from '../dataloder/dataloader.type'
import { ProjectType } from './projects.type'

@Injectable()
export class ProjectsLoader implements EntityLoader<ProjectType> {
  constructor(private readonly projectsService: ProjectsService) {}

  async load(keys: string[]): Promise<ProjectType[]> {
    const projects = await this.projectsService.findByIds(keys)
    return projects.map(ProjectType.fromDomain)
  }
}
