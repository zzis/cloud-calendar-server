import Router from 'koa-router';

import CalendarService from '@controllers/calendar';
import ICalendarService from '@services/ICalendarService';

const router = new Router();
const calendarService: ICalendarService = new CalendarService();
router.get('/:id', calendarService.getCalendar);

export default router.routes();
