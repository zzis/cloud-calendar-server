import { suite, test } from '@testdeck/mocha';
import assert from 'assert';
import CalendarService from '../../src/services/impl/calendar.service.impl';

@suite
class CalendarServiceTest {
  private calendarService: CalendarService;
  public before() {
    this.calendarService = new CalendarService();
  }

  @test
  public async createEventTest() {
    this.calendarService.createEvents({});
    assert.ok(true);
  }
}
