export type ProjectType = {
  readonly id: string
  readonly name: string
}

export type FindProjectsOptions = {
  name?: string
}

export type CreateProjectParams = {
  name: string
}
