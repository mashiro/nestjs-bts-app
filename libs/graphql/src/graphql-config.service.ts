import { DataLoaderService } from '@app/graphql/dataloder/dataloader.service'
import { GqlContext } from '@app/graphql/graphql.context'
import { Injectable } from '@nestjs/common'
import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql'

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(private readonly dataLoaderService: DataLoaderService) {}

  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      autoSchemaFile: 'schema.gql',
      context: (): GqlContext => ({
        loaders: this.dataLoaderService.buildDataLoaders(),
      }),
    }
  }
}
