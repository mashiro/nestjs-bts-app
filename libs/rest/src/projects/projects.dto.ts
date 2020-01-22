import { ApiProperty } from '@nestjs/swagger'

export class FindProjectsDto {
  @ApiProperty({ required: false })
  readonly name?: string
}

export class CreateProjectDto {
  @ApiProperty()
  readonly name: string
}
