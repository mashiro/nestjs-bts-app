import { Test, TestingModule } from '@nestjs/testing'
import { RestProjectsController } from './projects.controller'

describe('Projects Controller', () => {
  let controller: RestProjectsController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestProjectsController],
    }).compile()

    controller = module.get<RestProjectsController>(RestProjectsController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
