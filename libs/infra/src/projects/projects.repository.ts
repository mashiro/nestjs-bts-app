import { ProjectsRepository } from '@app/domain/projects/projects.repository'
import {
  CreateProjectDto,
  FindProjectsDto,
  ProjectDto,
} from '@app/domain/projects/projects.dto'
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

  async findOne(id: string): Promise<ProjectDto> {
    const project = await this.projectsRepository.findOne(id)
    if (!project) {
      return null
    }
    return this.toDto(project)
  }

  async find(dto: FindProjectsDto): Promise<ProjectDto[]> {
    const q = this.projectsRepository.createQueryBuilder('project')
    if (dto.name != null) {
      q.andWhere('project.name LIKE :name', { name: dto.name })
    }

    const projects = await q.getMany()
    return projects.map(project => this.toDto(project))
  }

  create(dto: CreateProjectDto): Promise<ProjectDto> {
    const project = new Project()
    project.name = dto.name

    return this.projectsRepository.save(project).then(this.toDto)
  }

  private toDto(project: Project): ProjectDto {
    return {
      id: project.id.toString(),
      name: project.name,
    }
  }
}
