import { GqlModule } from '@app/graphql/graphql.module'
import { RestModule } from '@app/rest/rest.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [RestModule, GqlModule],
})
export class AppModule {}
