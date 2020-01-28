import { Test, TestingModule } from '@nestjs/testing'
import { IssuesResolver } from './issues.resolver'

describe('IssuesResolver', () => {
  let resolver: IssuesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IssuesResolver],
    }).compile()

    resolver = module.get<IssuesResolver>(IssuesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
