import { Column, Model, Table } from 'sequelize-typescript';

@Table
class Calendar extends Model<Calendar> {
  @Column({primaryKey: true})
  public id!: number;

  @Column
  public title: string;
}

export default Calendar;
