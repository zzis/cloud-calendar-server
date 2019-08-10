import Calendar from "@dao/models/calendar.model";

export default interface ICalendarService {
  /**
   * Create event and insert into db
   * @param data data parsed by {utils/parsre}
   */
  createEvents(data);
  /**
   * Get all calendars
   */
  getAllCalendars(): Promise<Calendar[]>;
}
