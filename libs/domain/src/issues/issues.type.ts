export enum IssueStatus {
  Open = 'Open',
  InProgress = 'InProgress',
  Closed = 'Closed',
}

export type IssueType = {
  id: string
  projectId: string
  name: string
  status: IssueStatus
}

export type FindIssuesOptions = {
  projectId?: string
  name?: string
  status?: IssueStatus
}

export type CreateIssueParams = {
  projectId: string
  name: string
}

export type UpdateIssueParams = {
  name?: string
  status?: IssueStatus
}
