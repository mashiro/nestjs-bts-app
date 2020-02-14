import { IssuesService } from '@app/domain/issues/issues.service'
import { Injectable } from '@nestjs/common'
import { EntityLoader } from '../dataloder/dataloader.type'
import { IssueType } from './issues.type'

@Injectable()
export class IssuesLoader implements EntityLoader<IssueType> {
  constructor(private readonly issuesService: IssuesService) {}

  async load(keys: string[]): Promise<IssueType[]> {
    const issues = await this.issuesService.findByIds(keys)
    return issues.map(IssueType.fromDomain)
  }
}
