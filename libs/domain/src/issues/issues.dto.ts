import { ValueObject } from '../utils/value-object'

export enum IssueStatus {
  Open = 'Open',
  InProgress = 'InProgress',
  Closed = 'Closed',
}

export class IssueDto extends ValueObject<IssueDto> {
  readonly id: string
  readonly projectId: string
  readonly name: string
  readonly status: IssueStatus
  readonly createdAt: Date
  readonly updatedAt: Date
}

export class FindIssuesDto extends ValueObject<FindIssuesDto> {
  readonly projectId?: string
  readonly name?: string
  readonly status?: IssueStatus
}

export class CreateIssueDto extends ValueObject<CreateIssueDto> {
  readonly projectId: string
  readonly name: string
  readonly status: IssueStatus
}

export class UpdateIssueDto extends ValueObject<UpdateIssueDto> {
  readonly id: string
  readonly name?: string
  readonly status?: IssueStatus
}
