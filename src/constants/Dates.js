import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import localeData from 'dayjs/plugin/localeData';
import isBetween from 'dayjs/plugin/isBetween';
import 'dayjs/locale/de';

dayjs.extend(LocalizedFormat);
dayjs.extend(localeData);
dayjs.extend(isBetween);

export class Dates {
  static setLocale(locale) {
    dayjs.locale(locale);
  }

  static getToday() {
    return dayjs();
  }

  static getClearDate() {
    return this.getToday().hour(0).minute(0).second(0).millisecond(0);
  }

  static getMonths() {
    return dayjs.months();
  }

  static getDays() {
    return dayjs.weekdaysShort();
  }

  static getDate(date) {
    return dayjs(date);
  }

  static format(date, query) {
    if (typeof date === 'string' || typeof date === 'number') {
      return dayjs(date).format(query);
    } else {
      return date.format(query);
    }
  }
}
