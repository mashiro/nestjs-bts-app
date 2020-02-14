import * as DataLoader from 'dataloader'
import { IssueType } from '../issues/issues.type'
import { ProjectType } from '../projects/projects.type'

export type Entity = {
  id: string
}

export interface EntityLoader<T extends Entity> {
  load(keys: string[]): Promise<T[]>
}

export type EntityDataLoader<T extends Entity> = DataLoader<string, T>

export type EntityDataLoaders = {
  projects: EntityDataLoader<ProjectType>
  issues: EntityDataLoader<IssueType>
}
