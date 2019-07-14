import Koa from 'koa';

import ICalendarService from '@services/ICalendarService';

import DaoFactory from '@dao/DaoFactory';

class CalendarService implements ICalendarService {
  public calendarDao;
  constructor() {
    //
    this.calendarDao = DaoFactory.getDao('Calendar');
  }

  public getCalendar(ctx: Koa.BaseContext) {
    ctx.body = 'Hello world';
  }
}

export default CalendarService;
