import { DataTypes, Model } from 'sequelize';

class Calendar extends Model {
  public id!: number;
  public title: string;
}

function init(sequelize) {
  Calendar.init({
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
  }, {sequelize, modelName: 'calendar'});
}

export { init };
export default Calendar;
