import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { Lecture } from 'src/lecture/entity/lecture.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Student, Lecture])],
  providers: [StudentService],
  controllers: [StudentController]
})
export class StudentModule {}
