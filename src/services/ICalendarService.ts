import Koa from 'koa';

interface ICalendarService {
  getCalendar(ctx: Koa.BaseContext);
}

export default ICalendarService;
