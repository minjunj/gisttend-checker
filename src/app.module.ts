import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfModule } from './prof/prof.module';
import { Prof } from './prof/entity/prof.entity';
import { StudnetModule } from './studnet/studnet.module';
import { Student } from './studnet/entity/student.entity';
import { LectureModule } from './lecture/lecture.module';
import { Lecture } from './lecture/entity/lecture.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'gisttend',
    entities: [Prof, Student, Lecture],
    synchronize: true,
  }),
  ProfModule,
  StudnetModule,
  LectureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
