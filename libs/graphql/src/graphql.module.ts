import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { DataLoaderModule } from './dataloder/dataloader.module'
import { DataLoaderService } from './dataloder/dataloader.service'
import { GqlConfigService } from './graphql-config.service'
import { GqlIssuesModule } from './issues/issues.module'
import { GqlProjectsModule } from './projects/projects.module'

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [DataLoaderModule],
      inject: [DataLoaderService],
      useClass: GqlConfigService,
    }),
    GqlProjectsModule,
    GqlIssuesModule,
  ],
})
export class GqlModule {}
