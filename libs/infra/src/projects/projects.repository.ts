import { ProjectsRepository } from '@app/domain/projects/projects.repository'
import {
  CreateProjectParams,
  FindProjectsOptions,
  ProjectType,
} from '@app/domain/projects/projects.type'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityRepository, Repository } from 'typeorm'
import { Project } from '../database/entities'

@Injectable()
@EntityRepository()
export class ProjectsRepositoryImpl implements ProjectsRepository {
  constructor(
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>
  ) {}

  async findOne(id: string): Promise<ProjectType> {
    const project = await this.projectsRepository.findOne(id)
    if (!project) {
      return null
    }
    return this.toDto(project)
  }

  async find(options: FindProjectsOptions): Promise<ProjectType[]> {
    const q = this.projectsRepository.createQueryBuilder('project')
    if (options.name != null) {
      q.andWhere('project.name LIKE :name', { name: options.name })
    }

    const projects = await q.getMany()
    return projects.map(project => this.toDto(project))
  }

  create(params: CreateProjectParams): Promise<ProjectType> {
    const project = new Project()
    project.name = params.name

    return this.projectsRepository.save(project).then(this.toDto)
  }

  private toDto(project: Project): ProjectType {
    return {
      id: project.id.toString(),
      name: project.name,
    }
  }
}
