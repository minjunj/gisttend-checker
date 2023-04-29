import { Injectable } from '@nestjs/common';
import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecture } from 'src/lecture/entity/lecture.entity';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository : Repository<Student>,
        @InjectRepository(Lecture)
        private lectureRepository: Repository<Lecture>,
    ) {}
}
