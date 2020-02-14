import { ProjectsRepository } from '@app/domain/projects/projects.repository'
import {
  CreateProjectDto,
  FindProjectsDto,
  ProjectDto,
  UpdateProjectDto,
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

  async findByIds(ids: string[]): Promise<ProjectDto[]> {
    const projects = await this.projectsRepository.findByIds(ids)
    return projects.map(this.toDto)
  }

  async find(dto: FindProjectsDto): Promise<ProjectDto[]> {
    const q = this.projectsRepository.createQueryBuilder('project')
    if (dto.name) {
      q.andWhere('project.name LIKE :name', { name: dto.name })
    }

    const projects = await q.getMany()
    return projects.map(this.toDto)
  }

  async create(dto: CreateProjectDto): Promise<ProjectDto> {
    const project = new Project()
    project.name = dto.name

    return this.projectsRepository.save(project).then(this.toDto)
  }

  async update(dto: UpdateProjectDto): Promise<ProjectDto> {
    const project = await this.projectsRepository.findOne(dto.id)
    if (!project) {
      return null
    }

    if (dto.name) {
      project.name = dto.name
    }

    return this.projectsRepository.save(project).then(this.toDto)
  }

  private toDto(project: Project): ProjectDto {
    return {
      id: project.id.toString(),
      name: project.name,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
    }
  }
}
