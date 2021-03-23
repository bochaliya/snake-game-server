import { Injectable } from '@nestjs/common';
//import { TopScore } from './interfaces/top-score.interface';
//import { Model } from 'mongoose';
//import { InjectModel } from '@nestjs/mongoose';
import { UsersService } from '../users/users.service';

@Injectable()
export class TopScoresService {
    constructor(private readonly userService: UsersService){

    }
    
    getTopScores() {
        return this.userService.getTopScores();
    }
}
