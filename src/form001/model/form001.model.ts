import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Form001 extends Model<Form001> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}