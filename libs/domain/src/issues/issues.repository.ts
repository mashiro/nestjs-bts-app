import {
  IssueDto,
  FindIssuesDto,
  CreateIssueDto,
  UpdateIssueDto,
} from '@app/domain/issues/issues.dto'

export interface IssuesRepository {
  findOne(id: string): Promise<IssueDto>
  find(options: FindIssuesDto): Promise<IssueDto[]>
  create(input: CreateIssueDto): Promise<IssueDto>
  update(input: UpdateIssueDto): Promise<IssueDto>
}
