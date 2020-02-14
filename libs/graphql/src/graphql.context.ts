import { EntityDataLoaders } from '@app/graphql/dataloder/dataloader.type'

export class GqlContext {
  loaders: EntityDataLoaders

  constructor(init: GqlContext) {
    Object.assign(this, init)
  }
}
