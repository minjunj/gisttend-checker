import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prof } from 'src/prof/entity/prof.entity';
import { Student } from 'src/student/entity/student.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(Prof)
        private profRepository: Repository<Prof>,
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) {}

    async conFirm(userDto : UserDto): Promise<any> {
        const { name, confirm_id } = userDto
        const found_prof = await this.profRepository.findOneBy({name : name, prof_id : confirm_id})
        const found_stu = await this.studentRepository.findOneBy({name : name, student_id : confirm_id})

        console.log(found_prof)
        if(found_prof)
        {
            return "confirm prof";
        }
        else if(found_stu)
        {
            return "confirm student";
        }
        else
        {
            throw new NotFoundException("등록되지 않은 정보.");
        }
        return
    }
}
