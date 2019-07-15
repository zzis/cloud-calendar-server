import { Table, Model, Column, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo} from 'sequelize-typescript';
import Calendar from './calendar.model';

@Table
class Schedule extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;
  @Column
  public title: string;
  @Column
  public category: string;
  @Column
  public start: string;
  @Column
  public end: string;

  @ForeignKey(() => Calendar)
  public calendarId: number;

  @BelongsTo(() => Calendar)
  public calendar: Calendar;
}

export default Schedule;
