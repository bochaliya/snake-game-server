import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TopScoresController } from './top-scores/top-scores.controller';
import { UsersController } from './users/users.controller';
import { TopScoresService } from './top-scores/top-scores.service';
import { UsersService } from './users/users.service';
import { TopScoresModule } from './top-scores/top-scores.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [TopScoresModule, UsersModule, MongooseModule.forRoot(config.mongoURI, {
    keepAlive: true,
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
