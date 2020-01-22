import {
  CreateIssueDto,
  FindIssuesDto,
  IssueDto,
  UpdateIssueDto,
} from './issues.dto'

export const IssuesRepositoryToken = 'IssuesRepositoryToken'

export interface IssuesRepository {
  findOne(id: string): Promise<IssueDto>
  find(options: FindIssuesDto): Promise<IssueDto[]>
  create(params: CreateIssueDto): Promise<IssueDto>
  update(params: UpdateIssueDto): Promise<IssueDto>
}
