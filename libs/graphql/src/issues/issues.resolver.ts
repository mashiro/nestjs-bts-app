import { IssuesService } from '@app/domain/issues/issues.service'
import { ProjectsService } from '@app/domain/projects/projects.service'
import { Args, Query, ResolveProperty, Resolver, Root } from '@nestjs/graphql'
import { IssuesArgs } from './issues.input'
import { IssueType } from './issues.type'

@Resolver(of => IssueType)
export class IssuesResolver {
  constructor(
    private readonly issuesService: IssuesService,
    private readonly projectsService: ProjectsService
  ) {}

  @Query(returns => [IssueType])
  async issues(@Args() args: IssuesArgs) {
    const issues = await this.issuesService.find(args)
    return issues
  }

  @ResolveProperty()
  async project(@Root() issue: IssueType) {
    return this.projectsService.findOne(issue.projectId)
  }
}
