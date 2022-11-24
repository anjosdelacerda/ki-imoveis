import { Exclude } from "class-transformer";
import { Schedules } from "./schedules.entity";
import { Column, Entity, PrimaryColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Users {
    @PrimaryColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({unique: true})
    email: string;

    @Column()
    isAdm: boolean;

    @Column()
    isActive: boolean;

    @Column()
    @Exclude()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Schedules, (schedules) => schedules.user)
    schedules: Schedules[]

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}