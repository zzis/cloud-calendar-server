import path from 'path';
import { Sequelize } from 'sequelize';

import Calendar, { init } from './calendar';

class DaoFactory {
  public static getDao(type) {
    switch (type) {
      case 'Calendar':
        return new Calendar();
    }
  }

  private static sequelize: Sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'data/database.sqlite'),
  });
}

export default DaoFactory;
