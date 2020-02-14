import { Module } from '@nestjs/common'
import { GqlIssuesModule } from '../issues/issues.module'
import { GqlProjectsModule } from '../projects/projects.module'
import { DataLoaderService } from './dataloader.service'

@Module({
  imports: [GqlProjectsModule, GqlIssuesModule],
  providers: [DataLoaderService],
  exports: [DataLoaderService],
})
export class DataLoaderModule {}
