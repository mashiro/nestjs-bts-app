import {
  CreateIssueParams,
  FindIssuesOptions,
  IssueType,
  UpdateIssueParams,
} from './issues.type'

export const IssuesRepositoryToken = 'IssuesRepositoryToken'

export interface IssuesRepository {
  findOne(id: string): Promise<IssueType>
  find(options: FindIssuesOptions): Promise<IssueType[]>
  create(params: CreateIssueParams): Promise<IssueType>
  update(params: UpdateIssueParams): Promise<IssueType>
}
