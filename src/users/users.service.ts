import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel){

    }
    async getTopScores(): Promise<any[]> {
        return this.userModel.find().sort({score: -1}).limit(10);
    }
}
