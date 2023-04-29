import { Module } from '@nestjs/common';
import { ProfService } from './prof.service';
import { ProfController } from './prof.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prof } from './entity/prof.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prof])],
  providers: [ProfService],
  controllers: [ProfController]
})
export class ProfModule {}
