import { Inject, Injectable } from '@nestjs/common'
import { IssuesRepository, IssuesRepositoryToken } from './issues.repository'
import { FindIssuesDto, IssueDto } from './issues.dto'

@Injectable()
export class IssuesService {
  constructor(
    @Inject(IssuesRepositoryToken)
    private readonly issuesRepository: IssuesRepository
  ) {}

  findOne(id: string): Promise<IssueDto> {
    return this.issuesRepository.findOne(id)
  }

  find(options: FindIssuesDto): Promise<IssueDto[]> {
    return this.issuesRepository.find(options)
  }
}
