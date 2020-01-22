import { CreateIssueDto, IssueDto } from '@app/domain/issues/issues.dto'
import { IssuesService } from '@app/domain/issues/issues.service'
import {
  CreateIssueForm,
  FindIssuesForm,
  UpdateIssueForm,
} from '@app/rest/issues/issues.form'
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common'

@Controller('issues')
export class IssuesController {
  constructor(private readonly issuesService: IssuesService) {}

  @Get()
  async find(@Query() form: FindIssuesForm): Promise<IssueDto[]> {
    return this.issuesService.find(form)
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IssueDto> {
    const issue = await this.issuesService.findOne(id)
    if (!issue) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND)
    }

    return issue
  }

  @Post()
  async create(@Body() form: CreateIssueForm): Promise<IssueDto> {
    return this.issuesService.create({ ...form })
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() form: UpdateIssueForm
  ): Promise<IssueDto> {
    return this.issuesService.update({ ...form, id })
  }
}
