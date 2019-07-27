import Router from 'koa-router';
import Calendar from './calendar.router';

const router = new Router({
  prefix: '/api',
});
router.use('/calendar', Calendar);

export default router;
