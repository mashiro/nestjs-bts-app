import {
  CreateProjectParams,
  FindProjectsOptions,
  ProjectType,
} from './projects.type'

export const ProjectsRepositoryToken = 'ProjectsRepository'

export interface ProjectsRepository {
  findOne(id: string): Promise<ProjectType>
  find(options: FindProjectsOptions): Promise<ProjectType[]>
  create(params: CreateProjectParams): Promise<ProjectType>
}
