import { ProjectDto } from '@app/domain/projects/projects.dto'
import { Field, ObjectType } from 'type-graphql'
import { IssueType } from '../issues/issues.type'

@ObjectType('Project')
export class ProjectType {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date

  @Field(type => [IssueType])
  issues: IssueType[]

  static fromDomain(dto: ProjectDto): ProjectType {
    return {
      id: dto.id,
      name: dto.name,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
      issues: [],
    }
  }
}
