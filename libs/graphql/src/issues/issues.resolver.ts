import { IssuesService } from '@app/domain/issues/issues.service'
import { ProjectsService } from '@app/domain/projects/projects.service'
import { GqlContext } from '@app/graphql/graphql.context'
import {
  Args,
  Context,
  Query,
  ResolveProperty,
  Resolver,
  Root,
} from '@nestjs/graphql'
import { ProjectType } from '../projects/projects.type'
import { IssuesArgs } from './issues.input'
import { IssueType } from './issues.type'

@Resolver(of => IssueType)
export class IssuesResolver {
  constructor(
    private readonly issuesService: IssuesService,
    private readonly projectsService: ProjectsService
  ) {}

  @Query(returns => [IssueType])
  async issues(@Args() args: IssuesArgs): Promise<IssueType[]> {
    const issues = await this.issuesService.find(args)
    return issues.map(IssueType.fromDomain)
  }

  @ResolveProperty()
  async project(
    @Root() issue: IssueType,
    @Context() ctx: GqlContext
  ): Promise<ProjectType> {
    return ctx.loaders.projects.load(issue.projectId)
  }
}
