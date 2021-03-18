import moment from 'moment';

export const dateFormat = {
  ymd_hms: 'YYYY-MM-DD HH:mm:ss',
  ymd_hm: 'YYYY-MM-DD HH:mm',
  ymd_000: 'YYYY-MM-DD 00:00:00',
  ymd: 'YYYY-MM-DD',
}

/**
 * 获取格式时间
 *
 * @param {*} date
 * @param {*} format
 * @returns
 */
export const getDate = (date, format = '') => moment(date).format(format);

/**
 * 时间戳
 *
 * @param {*} date
 * @returns
 */
export const getTimeStamp = (date) => moment(date).valueOf();

/**
 * 是否为当天
 *
 * @param {*} date
 * @returns
 */
export const isToday = (date) => {
  const today = getDate(new Date(), dateFormat.ymd);
  const other = getDate(date, dateFormat.ymd);
  return today == other;
}

/**
* 是否为过去日期
*
* @param {Date} date
* @returns
*/
export const isPastDate = (date) => {
  const ct = getTimeStamp(date)
  const today = getTimeStamp(getDate(new Date(), dateFormat.ymd_000));
  return today - ct > 0;
}

/**
 * 判断时间是否为过去时间
 *  true: 过去
 *  false 未来
 *
 * @param {*} time
 * @returns {boolean}
 */
export const isPastTime = (time) => {
  const selectTime = getDate(time, dateFormat.ymd_hm);
  const st = getTimeStamp(selectTime);
  const currentTime = getDate(new Date(), dateFormat.ymd_hm);
  const ct = getTimeStamp(currentTime);
  const past = ct - st > 0;
  return past;
}

/**
 * 2个日期差多少天
 *
 * @param {Date} start
 * @param {Date} end
 * @returns
 */
export const daysOffDate = (start, end) => {
  const dateStart = new Date(getTimeStamp(start));
  dateStart.setHours(0, 0, 0, 0);
  const dateEnd = new Date(getTimeStamp(end));
  dateEnd.setHours(0, 0, 0, 0);
  const difValue = (dateEnd - dateStart) / (1000 * 60 * 60 * 24);
  return difValue;
}

/**
 * 比date多num个小时
 *
 * @param {Date} date @default 当前时间
 * @param {number} num @default 1
 * @returns
 */
export const moreAnyHours = (date, num = 1) => {
  const time = date ? new Date(date) : new Date();
  time.setHours(time.getHours() + num);
  return time;
}

/**
 * 比date多num个月
 *
 * @param {Date} date @default 当前时间
 * @param {number} num @default 1
 * @returns
 */
export const moreAnyMonths = (date, num = 1) => {
  const time = date ? new Date(date) : new Date();
  time.setMonth(time.getMonth() + num);
  return time;
}
