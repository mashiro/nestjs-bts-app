import { IssueStatus } from '@app/domain/issues/issues.dto'
import { ApiProperty } from '@nestjs/swagger'

export class FindIssuesForm {
  @ApiProperty({ required: false })
  readonly projectId?: string

  @ApiProperty({ required: false })
  readonly name?: string

  @ApiProperty({ required: false })
  readonly status?: IssueStatus
}

export class CreateIssueForm {
  @ApiProperty()
  readonly projectId: string

  @ApiProperty()
  readonly name: string
}

export class UpdateIssueForm {
  @ApiProperty({ required: false })
  readonly name?: string

  @ApiProperty({ required: false })
  readonly status?: IssueStatus
}
