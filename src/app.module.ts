import { RestModule } from '@app/rest/rest.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [RestModule],
})
export class AppModule {}
