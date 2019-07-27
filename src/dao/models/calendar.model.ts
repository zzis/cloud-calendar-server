import { Column, Model, Table, AutoIncrement, PrimaryKey, HasMany, Unique } from 'sequelize-typescript';

import Schedule from './schedule.model';

@Table
class Calendar extends Model<Calendar> {
  @AutoIncrement
  @PrimaryKey
  @Column
  public id!: number;

  @Unique
  @Column
  public name!: string;
  @Column
  public bgColor!: string;
  @Column
  public borderColor!: string;

  @HasMany(() => Schedule)
  public schedules: Schedule[];

}

export interface ICalendarType {
  id: number;
  name: string;
  beColor: string;
  borderColor: string;
}

export default Calendar;
