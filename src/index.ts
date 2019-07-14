import Koa from 'koa';
import 'module-alias/register';

import router from './routers';

const app = new Koa();

app.use(router.routes());
app.listen(3000);
