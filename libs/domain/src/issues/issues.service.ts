import { Inject, Injectable } from '@nestjs/common'
import {
  CreateIssueDto,
  FindIssuesDto,
  IssueDto,
  IssueStatus,
  UpdateIssueDto,
} from './issues.dto'
import { IssuesRepository, IssuesRepositoryToken } from './issues.repository'

@Injectable()
export class IssuesService {
  constructor(
    @Inject(IssuesRepositoryToken)
    private readonly issuesRepository: IssuesRepository
  ) {}

  findOne(id: string): Promise<IssueDto> {
    return this.issuesRepository.findOne(id)
  }

  findByIds(ids: string[]): Promise<IssueDto[]> {
    return this.issuesRepository.findByIds(ids)
  }

  find(dto: FindIssuesDto): Promise<IssueDto[]> {
    return this.issuesRepository.find(dto)
  }

  create(dto: Omit<CreateIssueDto, 'status'>): Promise<IssueDto> {
    return this.issuesRepository.create({ ...dto, status: IssueStatus.Open })
  }

  update(dto: UpdateIssueDto): Promise<IssueDto> {
    return this.issuesRepository.update(dto)
  }
}
