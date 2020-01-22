import { Inject, Injectable } from '@nestjs/common'
import { CreateProjectDto, FindProjectsDto, ProjectDto } from './projects.dto'
import {
  ProjectsRepository,
  ProjectsRepositoryToken,
} from './projects.repository'

@Injectable()
export class ProjectsService {
  constructor(
    @Inject(ProjectsRepositoryToken)
    private readonly projectsRepository: ProjectsRepository
  ) {}

  findOne(id: string): Promise<ProjectDto> {
    return this.projectsRepository.findOne(id)
  }

  find(options: FindProjectsDto): Promise<ProjectDto[]> {
    return this.projectsRepository.find(options)
  }

  create(params: CreateProjectDto): Promise<ProjectDto> {
    return this.projectsRepository.create(params)
  }
}
