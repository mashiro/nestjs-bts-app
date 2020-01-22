import { CreateProjectDto, FindProjectsDto, ProjectDto } from './projects.dto'

export const ProjectsRepositoryToken = 'ProjectsRepository'

export interface ProjectsRepository {
  findOne(id: string): Promise<ProjectDto>
  find(options: FindProjectsDto): Promise<ProjectDto[]>
  create(params: CreateProjectDto): Promise<ProjectDto>
}
