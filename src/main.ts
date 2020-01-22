import { RestModule } from '@app/rest/rest.module'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  RestModule.setupSwagger(app)
  await app.listen(3000)
}

bootstrap()
