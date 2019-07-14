import Koa from 'koa';

function getCalendar(ctx: Koa.BaseContext) {
  ctx.body = 'Hello world';
}

export default {
  getCalendar,
};
