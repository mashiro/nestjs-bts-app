import { ValueObject } from '@app/domain/utils/value-object'

export enum IssueStatus {
  Open = 'Open',
  InProgress = 'InProgress',
  Closed = 'Closed',
}

export class IssueDto extends ValueObject<IssueDto> {
  id: string
  projectId: string
  name: string
  status: IssueStatus
}

export class FindIssuesDto extends ValueObject<FindIssuesDto> {
  projectId?: string
  name?: string
  status?: IssueStatus
}

export class CreateIssueDto extends ValueObject<CreateIssueDto> {
  projectId: string
  name: string
}

export class UpdateIssueDto extends ValueObject<UpdateIssueDto> {
  name?: string
  status?: IssueStatus
}
