import { Prof } from "src/prof/entity/prof.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
}