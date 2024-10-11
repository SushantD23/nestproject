import { Column, Model, Table } from 'sequelize-typescript';

@Table({})
export class First extends Model<First> {
  @Column
  fname: string;

  @Column
  lname: string;

  @Column
  age: number;
}
