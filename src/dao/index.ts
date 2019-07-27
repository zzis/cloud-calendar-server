import { Sequelize } from 'sequelize-typescript';

export default (storage: string) => {
  return new Sequelize({
    dialect: 'sqlite',
    database: 'calendar',
    storage,
    modelPaths: [__dirname + '/models'],
  });
};
