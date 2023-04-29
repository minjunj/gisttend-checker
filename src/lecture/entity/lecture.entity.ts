import { Prof } from "src/prof/entity/prof.entity";
import { Student } from "src/student/entity/student.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Lecture{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name : string;

    @ManyToOne((Type) => Prof, { cascade: true })
    @JoinColumn()
    prof: Prof;

    @ManyToMany(() => Student, {cascade : true, eager : true})
    @JoinTable()
    students : Student[];
}