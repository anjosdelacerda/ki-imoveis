import { Column, Entity, ManyToOne, PrimaryColumn, Timestamp } from "typeorm";
import { Properties } from "./properties.entity";
import { Users } from "./users.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Schedules {
    @PrimaryColumn("uuid")
    id: string;

    @Column({type: "date"})
    date: string;

    @Column({type: "time"})
    hour: string;

    @ManyToOne(() => Properties)
    property: Properties;

    @ManyToOne(() => Users, {eager: true})
    user: Users;

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}