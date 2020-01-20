export enum IssueStatus {
  Open,
  InProgress,
  Closed,
}

export class IssueDto {
  id: string
  projectId: string
  name: string
  status: IssueStatus
}

export class FindIssuesDto {
  projectId?: string
  name?: string
  status?: IssueStatus
}

export class CreateIssueDto {
  projectId: string
  name: string
}

export class UpdateIssueDto {
  name?: string
  status?: IssueStatus
}
