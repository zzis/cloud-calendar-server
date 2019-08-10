import { parser } from '@utils/parser';
import resBuilder from '@utils/resBuilder';

import Calendar from '@dao/models/calendar.model';
import { KoaContext } from '@services/index';

class CalendarController {
  /**
   * handle upload user event log file
   * @param ctx {KoaContext}
   * @returns Array<Calendar>
   */
  public async uploadFile(ctx: KoaContext) {
    const { calendarService } = ctx;
    if (!ctx.request.files || !ctx.request.files.file) {
      return ctx.body = resBuilder({errNo: 1, errMsg: 'please select file'});
    }
    const file = ctx.request.files.file;
    const data: any = await parser(file.path);
    if (data.error) {
      return ctx.body = resBuilder({errNo: 1, errMsg: data.error});
    }
    const calendars = await calendarService.createEvents(data);
    return ctx.body = resBuilder({data: calendars});
  }

  /**
   * Test controller
   * @param ctx {KoaContext}
   */
  public testFunc(ctx: KoaContext) {
    ctx.body = resBuilder({errNo: 1, errMsg: 'this is a test interface'});
  }

  /**
   * Get calendar by id
   * @param ctx {KoaContext}
   */
  public async getCalendar(ctx: KoaContext) {
    // const calendar = await Calendar.findByPk(0);
    const calendars = await Calendar.findAll({
      where: {
        name: 'calendar',
      },
    });
    ctx.body = resBuilder({errNo: 1, errMsg: 'api not ready'});
  }

  /**
   * Get all calendars
   */
  public async getAllCalendars(ctx: KoaContext) {
    const calendars = await ctx.calendarService.getAllCalendars();
    const resData = await Promise.all(calendars.map((calendar) => {
      const resCalendar = calendar.toJSON();
      const schedules = calendar.schedules.map((s) => s.toJSON());
      Object.assign(resCalendar, {schedules});
      return resCalendar;
    }));
    ctx.body = resBuilder({data: resData});
  }
}

export default CalendarController;
