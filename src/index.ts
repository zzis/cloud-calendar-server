import Koa from 'koa';
import 'module-alias/register';

import sequelize from '@dao/index';

import router from './routers';

sequelize.sync({force: true});
const app = new Koa();

app.use(router.routes());
app.listen(3000);
