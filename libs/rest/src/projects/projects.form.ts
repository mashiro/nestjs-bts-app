import { ApiProperty } from '@nestjs/swagger'

export class FindProjectsForm {
  @ApiProperty({ required: false })
  readonly name?: string
}

export class CreateProjectForm {
  @ApiProperty()
  readonly name: string
}

export class UpdateProjectForm {
  @ApiProperty({ required: false })
  readonly name?: string
}
