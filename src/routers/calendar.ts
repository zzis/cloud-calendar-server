import Router from 'koa-router';

import Calendar from '@controllers/calendar';

const router = new Router();
router.get('/:id', Calendar.getCalendar);

export default router.routes();
