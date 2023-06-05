import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("Todo")
export class Todo {
  @PrimaryColumn()
  id!: string;

  @Column()
  text!: string;

  @Column()
  isComplete!: boolean;
}
