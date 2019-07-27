import path from 'path';

export const db = {
  storage: path.join(__dirname + '/../data/database.sqlite'),
};

export const testDB = {
  storage: ':memory',
};
