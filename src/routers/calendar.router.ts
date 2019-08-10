import Router from 'koa-router';
import koaBody from 'koa-body';

import CalendarController from '@controllers/calendar.controller';

const router = new Router();
const calendarController = new CalendarController();
router.get('/test', calendarController.testFunc);
router.post('/upload', calendarController.uploadFile);
router.get('/all', calendarController.getAllCalendars);
router.get('/:id', calendarController.getCalendar);

export default router.routes();
