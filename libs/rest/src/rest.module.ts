import { INestApplication, Module } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { RouterModule, Routes } from 'nest-router'
import { RestIssuesModule } from './issues/issues.module'
import { RestProjectsModule } from './projects/projects.module'

const routes: Routes = [
  {
    path: '/api',
    children: [RestProjectsModule, RestIssuesModule],
  },
]

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    RestProjectsModule,
    RestIssuesModule,
  ],
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
