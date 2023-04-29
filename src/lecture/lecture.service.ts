import { ConflictException, Injectable } from '@nestjs/common';
import { Lecture } from './entity/lecture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prof } from 'src/prof/entity/prof.entity';
import { LectureDto } from './dto/lecture.dto';

@Injectable()
export class LectureService {
    constructor(
        @InjectRepository(Lecture)
        private lectureRepository: Repository<Lecture>,
        @InjectRepository(Prof)
        private profRepository: Repository<Prof>,
    ) {}

    // 정보입력
    async postInfo(lecturedto : LectureDto):Promise<any> {
        const { name, code, prof_name } = lecturedto;

        const found_prof = await this.profRepository.findOneBy({name : prof_name});

        const found_lecture = await this.lectureRepository.findOneBy({code : code});
        
        if(found_prof)
        {
            if(!found_lecture)
            {
                const lecture = new Lecture();
                lecture.name = name;
                lecture.code = code
                lecture.prof = await this.profRepository.findOne({
                relations: {
                    lectures: true,
                },
                where: {
                    name: prof_name,
                },
                });

                await this.lectureRepository.manager.save(lecture);
                return "success";
            }
        }
        else{
            console.log(found_prof)
            throw new ConflictException('이미 등록된 강의');
        }
        return 'success'
    }
}
