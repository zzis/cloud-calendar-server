import Router from 'koa-router';

import CalendarService from '@controllers/calendar.controller';
import ICalendarService from '@services/calendar.service';

const router = new Router();
const calendarService: ICalendarService = new CalendarService();
router.get('/:id', calendarService.getCalendar);

export default router.routes();
