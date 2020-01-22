import { RestProjectsModule } from '@app/rest/projects/projects.module'
import { INestApplication, Module } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { RouterModule, Routes } from 'nest-router'

const routes: Routes = [
  {
    path: '/api',
    children: [
      {
        path: '/projects',
        module: RestProjectsModule,
      },
    ],
  },
]

@Module({
  imports: [RouterModule.forRoutes(routes), RestProjectsModule],
})
export class RestModule {
  static setupSwagger(app: INestApplication): void {
    const options = new DocumentBuilder()
      .setTitle('NestJS BTS App')
      .setDescription('Hexagonal Architecture for NestJS')
      .setVersion('1.0.0')
      .build()

    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('/swagger', app, document)
  }
}
