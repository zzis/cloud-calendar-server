import Koa from 'koa';
import CalendarService from './impl/calendar.service.impl';
import ICalendarService from './calendar.service';

export async function serviceRegister(ctx, next) {
  ctx.calendarService = new CalendarService();
  await next();
}

interface IServices {
  calendarService: ICalendarService;
}

export type KoaContext = Koa.BaseContext & IServices;
