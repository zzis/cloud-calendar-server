import { suite, test } from '@testdeck/mocha';
import 'module-alias/register';
import assert from 'assert';
import CalendarService from '@services/impl/calendar.service.impl';
import sequelize from '@dao/index';
import { testDB } from '@config/database.config';
import { prepareData } from '../utils/prepareData';

@suite
class CalendarServiceTest {
  private calendarService: CalendarService;
  public async before() {
    await sequelize(testDB.storage).sync({force: true});
    this.calendarService = new CalendarService();
    await prepareData();
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

  @test
  public async getAllCalendarTest() {
    const calendars = await this.calendarService.getAllCalendars();
    assert.ok(calendars.length);
  }
}
