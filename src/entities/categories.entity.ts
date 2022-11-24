import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Properties } from "./properties.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Categories {
    @PrimaryColumn("uuid")
    id: string;

    @Column({unique: true})
    name: string;

    @OneToMany(() => Properties, (properties) => properties.category)
    properties: Properties[]

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}