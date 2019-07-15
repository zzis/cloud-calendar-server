import { Sequelize } from 'sequelize-typescript';

export default new Sequelize({
  dialect: 'sqlite',
  database: 'calendar',
  // username: 'root',
  // password: '',
  storage: ':memory',
  modelPaths: [__dirname + '/models'],
});
