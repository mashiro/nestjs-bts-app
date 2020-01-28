import { IssuesService } from '@app/domain/issues/issues.service'
import { ProjectsService } from '@app/domain/projects/projects.service'
import { Args, Query, ResolveProperty, Resolver, Root } from '@nestjs/graphql'
import { IssueType } from '../issues/issues.type'
import { ProjectsArgs } from './projects.input'
import { ProjectType } from './projects.type'

@Resolver(of => ProjectType)
export class ProjectsResolver {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly issuesService: IssuesService
  ) {}

  @Query(returns => [ProjectType])
  async projects(@Args() args: ProjectsArgs) {
    const projects = await this.projectsService.find(args)
    return projects.map(ProjectType.fromDomain)
  }

  @ResolveProperty()
  async issues(@Root() project: ProjectType) {
    const issues = await this.issuesService.find({ projectId: project.id })
    return issues.map(IssueType.fromDomain)
  }
}
