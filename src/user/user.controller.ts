import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor( private readonly userService : UserService) {}

    @Post('confirm')
    conFirm(@Body() userDto : UserDto): Promise<any> {
        return this.userService.conFirm(userDto);
    }
}
