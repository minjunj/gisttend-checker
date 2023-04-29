import { Module } from '@nestjs/common';
import { ProfService } from './prof.service';
import { ProfController } from './prof.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prof } from './entity/prof.entity';
import { Lecture } from 'src/lecture/entity/lecture.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prof, Lecture])],
  providers: [ProfService],
  controllers: [ProfController]
})
export class ProfModule {}
