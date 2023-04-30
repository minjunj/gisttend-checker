import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prof } from 'src/prof/entity/prof.entity';
import { Student } from 'src/student/entity/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prof, Student])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
