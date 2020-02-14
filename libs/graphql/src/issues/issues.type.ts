import { IssueDto, IssueStatus } from '@app/domain/issues/issues.dto'
import { Field, ObjectType } from 'type-graphql'
import { ProjectType } from '../projects/projects.type'

@ObjectType('Issue')
export class IssueType {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  status: IssueStatus

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field(type => ProjectType)
  project: ProjectType

  projectId: string

  static fromDomain(dto: IssueDto): IssueType {
    return {
      id: dto.id,
      name: dto.name,
      status: dto.status,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
      project: null,
      projectId: dto.projectId,
    }
  }
}
