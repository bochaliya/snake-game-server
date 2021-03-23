import { Test, TestingModule } from '@nestjs/testing';
import { TopScoresController } from './top-scores.controller';

describe('TopScoresController', () => {
  let controller: TopScoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TopScoresController],
    }).compile();

    controller = module.get<TopScoresController>(TopScoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
