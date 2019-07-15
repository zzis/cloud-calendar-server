import Koa from 'koa';

import ICalendarService from '@services/calendar.service';
import Calendar from '@dao/models/calendar.model';

class CalendarService implements ICalendarService {
  constructor() {
    //
  }

  public async getCalendar(ctx: Koa.BaseContext) {
    // const calendar = await Calendar.findByPk(0);
    ctx.body = 'Hello world';
  }
}

export default CalendarService;
