import Router from 'koa-router';
import Calendar from './calendar';

const router = new Router();
router.use('/calendar', Calendar);

export default router;
