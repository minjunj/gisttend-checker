import { Body, Controller, Post } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureDto } from './dto/lecture.dto';

@Controller('lecture')
export class LectureController {
    constructor(private readonly lectureService : LectureService) {}

    @Post('add')
    postInfo(@Body() lecturedto : LectureDto): Promise<any>{
        return this.lectureService.postInfo(lecturedto);
    }
}


