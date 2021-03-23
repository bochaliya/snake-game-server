import { Controller, Post, Body} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    @Post()
    create(@Body() createUserDto: CreateUserDto): string {
        return `UserName: ${createUserDto.userName} Score: ${createUserDto.score}`;
    }
}