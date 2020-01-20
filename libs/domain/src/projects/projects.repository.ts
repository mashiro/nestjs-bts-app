import { CreateProjectDto, FindProjectsDto, ProjectDto } from './projects.dto'

export interface ProjectsRepository {
  findOne(id: string): Promise<ProjectDto>
  find(options: FindProjectsDto): Promise<ProjectDto[]>
  create(input: CreateProjectDto): Promise<ProjectDto>
}
