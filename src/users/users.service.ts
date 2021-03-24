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

    async getTopScoresPerUser(): Promise<any[]> {
        const pipeline = [
            { $sort: { user: -1, score: -1 } },
            {
                $group:
                    { '_id': '$user', 'scores': { '$push': '$$ROOT' } }
            },
            {
                $project:
                    { 'topTen': { '$slice': ['$scores', 10] } }
            }
        ]
        return this.userModel.aggregate(pipeline);
    }

    async totalGames(): Promise<any[]> {
        const pipeline = [
            {
                $group: {
                    _id: '$score_date', count: { $sum: 1 }
                }
            }
        ]
        return this.userModel.aggregate(pipeline);
    }

    async totalGamesPerUser(): Promise<any[]> {
        const pipeline = [
            {
                $group: {
                    _id: { score_date: '$score_date', user: '$user' },
                    count: { $sum: 1 }
                }
            }
        ]
        return this.userModel.aggregate(pipeline);
    }
}
