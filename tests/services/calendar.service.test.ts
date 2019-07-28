import { suite, test } from '@testdeck/mocha';
import assert from 'assert';
import CalendarService from '../../src/services/impl/calendar.service.impl';
import sequelize from '../../src/dao/index';
import path from 'path';

@suite
class CalendarServiceTest {
  private calendarService: CalendarService;
  public async before() {
    await sequelize(path.join(__dirname, '../../:memory')).sync({force: true});
    this.calendarService = new CalendarService();
  }

  @test
  public async createEventTest() {
    const data = {
      events: [{
        category: 'working',
        date: '2019-07-01',
        description: '表单构建器bug—dict设置下拉不生效',
        end: '11:00',
        start: '10:00',
      }, {
        category: 'working',
        date: '2019-07-01',
        description: '表单构建器bug—dict设置下拉不生效',
        end: '11:00',
        start: '10:00',
      }, {
        category: 'meeting',
        date: '2019-07-01',
        description: 'eefe周会',
        end: '12:00',
        start: '11:00',
      }],
    };
    const calendars = await this.calendarService.createEvents(data);
    assert.ok(calendars.length > 0);
  }
}
