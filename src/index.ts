import Koa from 'koa';
import 'module-alias/register';

import { db } from '@config/database.config';
import sequelize from '@dao/index';

import router from './routers';

console.log(db.storage);
sequelize(db.storage).sync({force: true});
const app = new Koa();

app.use(router.routes());
app.listen(3000);
