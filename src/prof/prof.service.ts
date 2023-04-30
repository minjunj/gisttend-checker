import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lecture } from 'src/lecture/entity/lecture.entity';
import { Repository } from 'typeorm';
import { Prof } from './entity/prof.entity';
import { ProfDto } from './dto/prof.dto';

@Injectable()
export class ProfService {
    constructor(
        @InjectRepository(Lecture)
        private lectureRepository: Repository<Lecture>,
        @InjectRepository(Prof)
        private profRepository: Repository<Prof>,
    ) {}

    async postInfo(profdto:ProfDto): Promise<any> {
        const { name, prof_id } = profdto;

        const found = await this.profRepository.findOneBy({name : name, prof_id : prof_id});

        if(!found){
            await this.profRepository.insert([
                {
                    name : name,
                    prof_id : prof_id
                }
            ])
        }
        else{
            throw new ConflictException('이미 등록된 교수명');
        }
        return 'success'
    }
}
