import { Column, Model, Table, AutoIncrement, PrimaryKey, HasMany } from 'sequelize-typescript';

import Schedule from './schedule.model';

@Table
class Calendar extends Model<Calendar> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Column
  public name!: string;
  @Column
  public bgColor!: string;
  @Column
  public borderColor!: string;

  @HasMany(() => Schedule)
  public schedules: Schedule[];

}

export default Calendar;
