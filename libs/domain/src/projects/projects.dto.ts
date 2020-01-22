import { ValueObject } from '@app/domain/utils/value-object'

export class ProjectDto extends ValueObject<ProjectDto> {
  readonly id: string
  readonly name: string
}

export class FindProjectsDto extends ValueObject<FindProjectsDto> {
  readonly name?: string
}

export class CreateProjectDto extends ValueObject<CreateProjectDto> {
  readonly name: string
}

export class UpdateProjectDto extends ValueObject<UpdateProjectDto> {
  readonly id: string
  readonly name?: string
}
