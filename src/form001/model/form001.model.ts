import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
})
export class Form001 extends Model<Form001> {
  @Column
  firstName: string;

  @Column
  lastName: string;

}