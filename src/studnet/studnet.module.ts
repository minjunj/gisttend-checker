import { Module } from '@nestjs/common';
import { StudnetService } from './studnet.service';
import { StudnetController } from './studnet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Student])],
  providers: [StudnetService],
  controllers: [StudnetController]
})
export class StudnetModule {}
