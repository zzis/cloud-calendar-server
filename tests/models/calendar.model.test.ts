import { suite, test } from '@testdeck/mocha';
import 'module-alias/register';
import assert from 'assert';

import sequelize from '@dao/index';
import Calendar from '@models/calendar.model';
import { testDB } from '@config/database.config';

@suite
class CalendarTest {
  public before() {
    sequelize(testDB.storage).sync();
  }

  @test
  public async createCalendar() {
    const calendarName = 'test';
    const calendar = await Calendar.create({
      name: calendarName,
    });
    assert.ok(calendar.name === calendarName);
  }
}
