import Koa from 'koa';
import { parser } from '@utils/parser';
import resBuilder from '@utils/resBuilder';

import Calendar from '@dao/models/calendar.model';

class CalendarController {

  public async uploadFile(ctx: Koa.BaseContext) {
    if (!ctx.request.files || !ctx.request.files.file) {
      return ctx.body = resBuilder({errNo: 1, errMsg: 'please select file'});
    }
    const file = ctx.request.files.file;
    const data: any = await parser(file.path);
    if (data.error) {
      return ctx.body = resBuilder({errNo: 1, errMsg: data.error});
    }
    return ctx.body = resBuilder({data});
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
