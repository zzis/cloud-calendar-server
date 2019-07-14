import Koa from 'koa';

import ICalendarService from '@services/ICalendarService';
import Calendar from '@models/calendar';

class CalendarService implements ICalendarService {
  public calendarDao;
  constructor() {
    //
  }

  public getCalendar(ctx: Koa.BaseContext) {
    Calendar.findOne();
    ctx.body = 'Hello world';
  }
}

export default CalendarService;
