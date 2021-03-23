import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel) {

    }

    async addUser(userName, score): Promise<any[]> {
        let scoreDate = new Date();
        scoreDate.setHours(0, 0, 0, 0);
        scoreDate = new Date();
        return this.userModel.insertMany([{ user: userName, score: score, score_date: scoreDate }])
    }

    async getTopScores(): Promise<any[]> {
        return this.userModel.find().sort({ score: -1 }).limit(10);
    }
}
