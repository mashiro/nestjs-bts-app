import { IssuesRepository } from '@app/domain/issues/issues.repository'
import {
  CreateIssueDto,
  FindIssuesDto,
  IssueDto,
  UpdateIssueDto,
} from '@app/domain/issues/issues.dto'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityRepository, Repository } from 'typeorm'
import { Issue, Project } from '../database/entities'

@Injectable()
@EntityRepository()
export class IssuesRepositoryImpl implements IssuesRepository {
  constructor(
    @InjectRepository(Issue)
    private readonly issuesRepository: Repository<Issue>,
    @InjectRepository(Project)
    private readonly projectsRepository: Repository<Project>
  ) {}

  async findOne(id: string): Promise<IssueDto> {
    const issue = await this.issuesRepository.findOne(id)
    return this.toDto(issue)
  }

  async find(dto: FindIssuesDto): Promise<IssueDto[]> {
    const q = this.issuesRepository.createQueryBuilder('issue')
    if (dto.projectId != null) {
      q.andWhere('issue.project_id = :id', { id: dto.projectId })
    }
    if (dto.name != null) {
      q.andWhere('issue.name LIKE :name', { name: `%${dto.name}%` })
    }
    if (dto.status != null) {
      q.andWhere('issue.status = :status', { status: dto.status })
    }

    const issues = await q.getMany()
    return issues.map(issue => this.toDto(issue))
  }

  async create(dto: CreateIssueDto): Promise<IssueDto> {
    const project = await this.projectsRepository.findOne(dto.projectId)
    if (!project) {
      throw new Error('Project not found')
    }

    const issue = new Issue()
    issue.project = project
    issue.name = dto.name
    issue.status = dto.status

    return this.issuesRepository.save(issue).then(this.toDto)
  }

  async update(dto: UpdateIssueDto): Promise<IssueDto> {
    const issue = await this.issuesRepository.findOne(dto.id)
    if (!issue) {
      return null
    }

    if (dto.name) {
      issue.name = dto.name
    }
    if (dto.status) {
      issue.status = dto.status
    }

    return this.issuesRepository.save(issue).then(this.toDto)
  }

  private toDto(issue: Issue): IssueDto {
    return {
      id: issue.id.toString(),
      projectId: issue.projectId.toString(),
      name: issue.name,
      status: issue.status,
      createdAt: issue.createdAt,
      updatedAt: issue.updatedAt,
    }
  }
}
