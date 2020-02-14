import { Injectable } from '@nestjs/common'
import * as DataLoader from 'dataloader'
import { Entity, EntityDataLoaders, EntityLoader } from './dataloader.type'
import { IssuesLoader } from '../issues/issues.loader'
import { ProjectsLoader } from '../projects/projects.loader'

@Injectable()
export class DataLoaderService {
  constructor(
    private readonly projectsLoader: ProjectsLoader,
    private readonly issuesLoader: IssuesLoader
  ) {}

  buildDataLoaders(): EntityDataLoaders {
    return {
      projects: this.buildDataLoader(this.projectsLoader),
      issues: this.buildDataLoader(this.issuesLoader),
    }
  }

  private buildDataLoader<T extends Entity>(
    loader: EntityLoader<T>
  ): DataLoader<string, T> {
    return new DataLoader<string, T>(async keys => {
      const items = await loader.load(keys as string[])
      const map = new Map(items.map(item => [item.id, item]))
      return keys.map(key => map.get(key))
    })
  }
}
