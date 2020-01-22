import { Inject, Injectable } from '@nestjs/common'
import {
  CreateProjectParams,
  FindProjectsOptions,
  ProjectType,
} from './projects.type'
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

  findOne(id: string): Promise<ProjectType> {
    return this.projectsRepository.findOne(id)
  }

  find(options: FindProjectsOptions): Promise<ProjectType[]> {
    return this.projectsRepository.find(options)
  }

  create(params: CreateProjectParams): Promise<ProjectType> {
    return this.projectsRepository.create(params)
  }
}
