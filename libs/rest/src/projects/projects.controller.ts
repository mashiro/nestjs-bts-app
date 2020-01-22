import { ProjectsService } from '@app/domain/projects/projects.service'
import { ProjectType } from '@app/domain/projects/projects.type'
import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { CreateProjectDto, CreateProjectInput } from './projects.dto'

@Controller()
export class RestProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  find(): Promise<ProjectType[]> {
    return this.projectsService.find({})
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProjectType> {
    return this.projectsService.findOne(id)
  }

  @Post('dto')
  create(@Body() input: CreateProjectDto): Promise<ProjectType> {
    return this.projectsService.create(input)
  }

  @Post('type')
  create2(@Body() input: CreateProjectInput): Promise<ProjectType> {
    return this.projectsService.create(input)
  }
}
