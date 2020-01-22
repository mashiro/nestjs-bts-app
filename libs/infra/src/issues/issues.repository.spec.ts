import { Test, TestingModule } from '@nestjs/testing'
import { ProjectsRepositoryImpl } from './issues.repository'

describe('ProjectsRepository', () => {
  let repository: ProjectsRepositoryImpl

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsRepositoryImpl],
    }).compile()

    repository = module.get<ProjectsRepositoryImpl>(ProjectsRepositoryImpl)
  })

  it('should be defined', () => {
    expect(repository).toBeDefined()
  })
})
