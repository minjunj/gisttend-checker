import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './entity/student.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecture } from 'src/lecture/entity/lecture.entity';
import { StudentDto } from './dto/student.dto';
import { Stu_LEctureDto } from './dto/stu_lecture.dto';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository : Repository<Student>,
        @InjectRepository(Lecture)
        private lectureRepository: Repository<Lecture>,
    ) {}

    async postInfo(studentDto : StudentDto): Promise<any> {
        const { name, student_id } = studentDto;

        const found = await this.studentRepository.findOneBy({
            name : name,
            student_id : student_id
        });

        if(!found)
        {
            const student = new Student()
            student.name = name
            student.student_id = student_id
            await this.studentRepository.manager.save(student)
            return 'success'
        }
        else{
            throw new ConflictException("이미 등록된 학생")
        }
        
    }

    async inLecture(stu_lectureDto : Stu_LEctureDto): Promise<any>
    {
        const { lecture_code, student_id, name } = stu_lectureDto;
        const found_stu = await this.studentRepository.findOneBy({
            student_id : student_id
        });

        const found_lecture = await this.lectureRepository.findOneBy({
            code : lecture_code
        });

        if(found_stu)
        {
            if(found_lecture)
            {
                found_lecture.students.push(found_stu);
                await this.lectureRepository.manager.save(found_lecture)
                return 'success'
            }
            else{
                throw new NotFoundException("없는 강의 코드입니다.")
            }
        }
        else{
            throw new NotFoundException("없는 학번입니다.")
        }
        return
    }
}
