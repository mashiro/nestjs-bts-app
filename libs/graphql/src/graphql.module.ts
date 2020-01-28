import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { GqlIssuesModule } from './issues/issues.module'
import { GqlProjectsModule } from './projects/projects.module'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    GqlProjectsModule,
    GqlIssuesModule,
  ],
})
export class GqlModule {}
