import { parser, IEvent } from '@utils/parser';
import path from 'path';
import ICalendarService from '@services/calendar.service';
import CalendarService from '@services/impl/calendar.service.impl';

/**
 * read log file and save parsed data into db
 */
export async function prepareData() {
  const calendarService: ICalendarService = new CalendarService();
  const data = await parser(path.join(__dirname, './resources/test.txt'));
  await calendarService.createEvents(data);
}
