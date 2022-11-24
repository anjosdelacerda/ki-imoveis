import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Addresses } from "./addresses.entity";
import { Categories } from "./categories.entity";
import { Schedules } from "./schedules.entity";
import { v4 as uuid } from "uuid";

@Entity()
export class Properties {
  @PrimaryColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2 })
  value: number;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses, { eager: true })
  @JoinColumn()
  address: Addresses;

  @ManyToOne(() => Categories, { eager: true })
  category: Categories;

  @OneToMany(() => Schedules, (schedules) => schedules.property, {eager: true})
  schedules: Schedules[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
