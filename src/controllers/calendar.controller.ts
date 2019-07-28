import Koa from 'koa';
import { parser } from '@utils/parser';
import resBuilder from '@utils/resBuilder';

import Calendar from '@dao/models/calendar.model';
import ICalendarService from '@services/calendar.service';
import CalendarService from '@services/impl/calendar.service.impl';

class CalendarController {
  private calendarService: ICalendarService;

  public constructor() {
    this.calendarService = new CalendarService();
  }

  public async uploadFile(ctx: Koa.BaseContext) {
    if (!ctx.request.files || !ctx.request.files.file) {
      return ctx.body = resBuilder({errNo: 1, errMsg: 'please select file'});
    }
    const file = ctx.request.files.file;
    const data: any = await parser(file.path);
    if (data.error) {
      return ctx.body = resBuilder({errNo: 1, errMsg: data.error});
    }
    const calendars = await new CalendarService().createEvents(data);
    return ctx.body = resBuilder({data: calendars});
  }

  public testFunc(ctx: Koa.BaseContext) {
    ctx.body = resBuilder({errNo: 1, errMsg: 'this is a test interface'});
  }

  public async getCalendar(ctx: Koa.BaseContext) {
    // const calendar = await Calendar.findByPk(0);
    const calendars = await Calendar.findAll({
      where: {
        name: 'calendar',
      },
    });
    ctx.body = resBuilder({errNo: 1, errMsg: 'api not ready'});
  }
}

export default CalendarController;
