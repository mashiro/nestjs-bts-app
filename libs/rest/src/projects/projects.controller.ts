import { ProjectDto } from '@app/domain/projects/projects.dto'
import { ProjectsService } from '@app/domain/projects/projects.service'
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post, Put,
  Query,
} from '@nestjs/common'
import { CreateProjectForm, FindProjectsForm, UpdateProjectForm } from './projects.form'

@Controller()
export class RestProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  find(@Query() form: FindProjectsForm): Promise<ProjectDto[]> {
    return this.projectsService.find({ name: form.name })
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProjectDto> {
    const project = await this.projectsService.findOne(id)
    if (!project) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }

    return project
  }

  @Post()
  create(@Body() form: CreateProjectForm): Promise<ProjectDto> {
    return this.projectsService.create(form)
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() form: UpdateProjectForm): Promise<ProjectDto> {
    return this.projectsService.update({ id, ...form })
  }
}
