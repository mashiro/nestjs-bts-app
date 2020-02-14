import { Inject, Injectable } from '@nestjs/common'
import {
  CreateProjectDto,
  FindProjectsDto,
  ProjectDto,
  UpdateProjectDto,
} from './projects.dto'
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

  findByIds(ids: string[]): Promise<ProjectDto[]> {
    return this.projectsRepository.findByIds(ids)
  }

  find(dto: FindProjectsDto): Promise<ProjectDto[]> {
    return this.projectsRepository.find(dto)
  }

  create(dto: CreateProjectDto): Promise<ProjectDto> {
    return this.projectsRepository.create(dto)
  }

  update(dto: UpdateProjectDto): Promise<ProjectDto> {
    return this.projectsRepository.update(dto)
  }
}
