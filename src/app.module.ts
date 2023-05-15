import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfModule } from './prof/prof.module';
import { Prof } from './prof/entity/prof.entity';
import { Student } from './student/entity/student.entity';
import { LectureModule } from './lecture/lecture.module';
import { Lecture } from './lecture/entity/lecture.entity';
import { StudentModule } from './student/student.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'mysql-container',
    port: 3306,
    username: 'root',
    password: 'test1234', 
    database: 'gisttend',
    entities: [Prof, Student, Lecture],
    synchronize: true,
  }),
  ProfModule,
  StudentModule,
  LectureModule,
  StudentModule,
  UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
