import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Stu_LEctureDto } from './dto/stu_lecture.dto';
import { Request } from 'express';

@Controller('student')
export class StudentController {
    constructor(private readonly studentService : StudentService) {}
    
    @Post('add')
    postInfo(@Body() studentDto : StudentDto): Promise<any>{
        return this.studentService.postInfo(studentDto);
    }

    @Post('join_lecture')
    inLecture(@Body() stu_lectureDto : Stu_LEctureDto): Promise<any>{
        return this.studentService.inLecture(stu_lectureDto);
    }
    
    @Get()
    getIpAddressFromRequest(@Req() request: Request): string {
        return request.ip;
        
    }
}
