import Koa from 'koa';
import 'module-alias/register';

import sequelize from '@dao/index';

import router from './routers';

const app = new Koa();
sequelize.sync({force: true});

app.use(router.routes());
app.listen(3000);
