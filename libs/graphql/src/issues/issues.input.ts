import { ArgsType, Field } from 'type-graphql'

@ArgsType()
export class IssuesArgs {
  @Field({ nullable: true })
  name?: string
}
