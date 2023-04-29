import { Lecture } from "src/lecture/entity/lecture.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Prof{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany((Type) => Lecture, (lecture) => lecture.prof, { eager : true})
    lectures: Lecture[];
}