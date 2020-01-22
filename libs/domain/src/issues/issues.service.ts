import { Inject, Injectable } from '@nestjs/common'
import { IssuesRepository, IssuesRepositoryToken } from './issues.repository'
import { FindIssuesOptions, IssueType } from './issues.type'

@Injectable()
export class IssuesService {
  constructor(
    @Inject(IssuesRepositoryToken)
    private readonly issuesRepository: IssuesRepository
  ) {}

  findOne(id: string): Promise<IssueType> {
    return this.issuesRepository.findOne(id)
  }

  find(options: FindIssuesOptions): Promise<IssueType[]> {
    return this.issuesRepository.find(options)
  }
}
