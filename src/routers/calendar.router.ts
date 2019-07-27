import Router from 'koa-router';
import koaBody from 'koa-body';

import CalendarController from '@controllers/calendar.controller';

const router = new Router();
const calendarController = new CalendarController();
router.get('/test', calendarController.testFunc);
router.get('/:id', calendarController.getCalendar);
router.post('/upload', calendarController.uploadFile);

export default router.routes();
