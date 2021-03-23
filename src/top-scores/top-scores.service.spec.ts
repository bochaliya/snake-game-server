import { Test, TestingModule } from '@nestjs/testing';
import { TopScoresService } from './top-scores.service';

describe('TopScoresService', () => {
  let service: TopScoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TopScoresService],
    }).compile();

    service = module.get<TopScoresService>(TopScoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
