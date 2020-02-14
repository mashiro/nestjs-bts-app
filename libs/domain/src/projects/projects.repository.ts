import {
  CreateProjectDto,
  FindProjectsDto,
  ProjectDto,
  UpdateProjectDto,
} from './projects.dto'

export const ProjectsRepositoryToken = 'ProjectsRepository'

export interface ProjectsRepository {
  findOne(id: string): Promise<ProjectDto>
  findByIds(ids: string[]): Promise<ProjectDto[]>
  find(dto: FindProjectsDto): Promise<ProjectDto[]>
  create(dto: CreateProjectDto): Promise<ProjectDto>
  update(dto: UpdateProjectDto): Promise<ProjectDto>
}
