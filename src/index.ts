import Koa from 'koa';
import 'module-alias/register';
import koaBody from 'koa-body';
import path from 'path';
import fs from 'fs';

import { db } from '@config/database.config';
import sequelize from '@dao/index';

import router from './routers';

sequelize(db.storage).sync({force: true});
const app = new Koa();
const UPLOAD_DIR = '../public/upload/';

app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, UPLOAD_DIR),
    keepExtensions: true,
    maxFieldsSize: 2 * 1024 * 1024, // upload file size limit 2M
    onFileBegin: (name, file) => {
      const fp = path.join(__dirname, UPLOAD_DIR);
      if (!fs.existsSync(fp)) {
        fs.mkdirSync(fp);
      }
    },
  },
}));
app.use(router.routes());
app.listen(3000);
