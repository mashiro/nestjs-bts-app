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
import { Issue } from '../database/entities'

@Injectable()
@EntityRepository()
export class IssuesRepositoryImpl implements IssuesRepository {
  constructor(
    @InjectRepository(Issue)
    private readonly issuesRepository: Repository<Issue>
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
    return undefined
  }

  async update(dto: UpdateIssueDto): Promise<IssueDto> {
    return undefined
  }

  private toDto(issue: Issue): IssueDto {
    return {
      id: issue.id.toString(),
      projectId: issue.projectId.toString(),
      name: issue.name,
      status: issue.status,
    }
  }
}
