import { Body, Controller, Post } from '@nestjs/common';
import { ProfService } from './prof.service';
import { ProfDto } from './dto/prof.dto';

@Controller('prof')
export class ProfController {
    constructor (private readonly profService : ProfService) {}

    @Post('add')
    postInfo(@Body() profdto : ProfDto): Promise<any>{
        return this.profService.postInfo(profdto);
    }
}
