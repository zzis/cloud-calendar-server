import ICalendarService from '@services/calendar.service';
import Calendar from '../../dao/models/calendar.model';
// import Calendar from '@models/calendar.model';
// import Schedule from '@models/schedule.model';
import Schedule from '../../dao/models/schedule.model';
import { IEvent } from '@utils/parser';

const COLORS = [
  '#f6e58d',
  '#ffbe76',
  '#ff7979',
  '#badc58',
  '#dff9fb',
  '#f9ca24',
  '#f0932b',
  '#eb4d4b',
  '#6ab04c',
  '#c7ecee',
  '#7ed6df',
  '#e056fd',
  '#686de0',
  '#30336b',
  '#95afc0',
  '#22a6b3',
  '#be2edd',
  '#4834d4',
  '#130f40',
  '#535c68',
];

export default class CalendarService implements ICalendarService {

  private calendars;
  public constructor() {
    this.calendars = {};
  }

  /**
   * create schedules
   * @param data {any} data pasered by utils/parser
   */
  public async createEvents(data: any) {
    const { events } = data;
    if (!events) {
      return;
    }
    const calendars = [];
    for (const event of events as IEvent[]) {
      const calendar: Calendar = await this.findCalendarByName(event.category);
      const schedule = await this.createEvent(event, calendar);
      let c = calendars.find((item) => item.name === calendar.name);
      if (!c) {
        c = {
          name: calendar.name,
          bgColor: calendar.bgColor,
          borderColor: calendar.borderColor,
          id: calendar.id,
          schedules: [],
        };
        calendars.push(c);
      }
      c.schedules.push({
        title: schedule.title,
        start: schedule.start,
        end: schedule.end,
        calendarId: calendar.id,
      });
    }
    return calendars;
  }

  /**
   * create a schedule
   * @param event {IEvent} event
   * @param calendar {Calendar} calendar
   */
  private async createEvent(event: IEvent, calendar: Calendar) {
    const schedule = await Schedule.create({
      title: event.description,
      start: `${event.date} ${event.start}`,
      end: `${event.date} ${event.end}`,
      calendarId: calendar.id,
    });
    return schedule;
  }

  /**
   * find calendar
   * @param name {string}
   */
  private async findCalendarByName(name) {
    // check local cache
    if (this.calendars.hasOwnProperty(name)) {
      return this.calendars[name];
    }
    let calendar;
    try {
      await Calendar.findOne({
        where: {
          name,
        },
      });
    } catch (err) {
      // console.log(err);
    }
    // create calendar if not exists
    if (!calendar) {
      calendar = await this.createCalendar(name);
    }
    this.calendars[name] = calendar;
    return calendar;
  }

  /**
   *  create calendar
   * @param name {string} name of the calendar
   */
  private async createCalendar(name) {
    const color = this.pickColor();
    let calendar;
    try {
      calendar = await Calendar.create({
        name,
        bgColor: color,
        borderColor: color,
      });
    } catch (err) {
      // console.log(err);
    }
    return calendar;
  }

  private pickColor() {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  }
}
