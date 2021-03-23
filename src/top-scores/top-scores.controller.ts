import { Controller, Get } from '@nestjs/common';
import { TopScoresService } from './top-scores.service';
//import { TopScore } from './interfaces/top-score.interface';

@Controller('top-scores')
export class TopScoresController {
    constructor(private readonly topScoresService: TopScoresService) {
        
    }
    @Get()
    async getTopScores(): Promise<any[]> {
        return this.topScoresService.getTopScores();
    }
}
