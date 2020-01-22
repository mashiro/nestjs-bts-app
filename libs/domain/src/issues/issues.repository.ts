import {
  CreateIssueDto,
  FindIssuesDto,
  IssueDto,
  UpdateIssueDto,
} from './issues.dto'

export const IssuesRepositoryToken = 'IssuesRepositoryToken'

export interface IssuesRepository {
  findOne(id: string): Promise<IssueDto>
  find(dto: FindIssuesDto): Promise<IssueDto[]>
  create(dto: CreateIssueDto): Promise<IssueDto>
  update(dto: UpdateIssueDto): Promise<IssueDto>
}
