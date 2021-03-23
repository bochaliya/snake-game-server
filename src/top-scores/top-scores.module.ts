import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopScoresController } from './top-scores.controller';
import { TopScoresService } from './top-scores.service';
import { UserSchema } from '../users/schemas/user.schema';
import { UsersModule } from '../users/users.module';


@Module({
  //imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  imports: [UsersModule],
  controllers: [TopScoresController],
  providers: [TopScoresService],
})

export class TopScoresModule {}
