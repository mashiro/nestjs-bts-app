import { ProjectsService } from '@app/domain/projects/projects.service'
import { ProjectType } from '@app/domain/projects/projects.type'
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common'
import { CreateProjectDto, FindProjectsDto } from './projects.dto'

@Controller()
export class RestProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  find(@Query() query: FindProjectsDto): Promise<ProjectType[]> {
    return this.projectsService.find({ name: query.name })
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProjectType> {
    const project = await this.projectsService.findOne(id)
    if (!project) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }

    return project
  }

  @Post()
  create(@Body() body: CreateProjectDto): Promise<ProjectType> {
    return this.projectsService.create(body)
  }
}
