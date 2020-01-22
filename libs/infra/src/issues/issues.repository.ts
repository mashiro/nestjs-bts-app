import { IssuesRepository } from '@app/domain/issues/issues.repository'
import {
  CreateIssueParams,
  FindIssuesOptions,
  IssueType,
  UpdateIssueParams,
} from '@app/domain/issues/issues.type'
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

  async findOne(id: string): Promise<IssueType> {
    const issue = await this.issuesRepository.findOne(id)
    return this.toDto(issue)
  }

  async find(options: FindIssuesOptions): Promise<IssueType[]> {
    const q = this.issuesRepository.createQueryBuilder('issue')
    if (options.projectId != null) {
      q.andWhere('issue.project_id = :id', { id: options.projectId })
    }
    if (options.name != null) {
      q.andWhere('issue.name LIKE :name', { name: `%${options.name}%` })
    }
    if (options.status != null) {
      q.andWhere('issue.status = :status', { status: options.status })
    }

    const issues = await q.getMany()
    return issues.map(issue => this.toDto(issue))
  }

  async create(params: CreateIssueParams): Promise<IssueType> {
    return undefined
  }

  async update(params: UpdateIssueParams): Promise<IssueType> {
    return undefined
  }

  private toDto(issue: Issue): IssueType {
    return {
      id: issue.id.toString(),
      projectId: issue.projectId.toString(),
      name: issue.name,
      status: issue.status,
    }
  }
}
