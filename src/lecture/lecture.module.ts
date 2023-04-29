import { Module } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { LectureController } from './lecture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lecture } from './entity/lecture.entity';
import { Prof } from 'src/prof/entity/prof.entity';
import { Student } from 'src/student/entity/student.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Lecture, Prof, Student])],
  providers: [LectureService],
  controllers: [LectureController]
})
export class LectureModule {}
