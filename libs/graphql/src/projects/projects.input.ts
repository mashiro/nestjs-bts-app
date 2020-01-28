import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class ProjectsArgs {
  @Field({ nullable: true })
  name?: string
}
