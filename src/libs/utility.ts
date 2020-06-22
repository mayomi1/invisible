const momentTimezone = require('moment-timezone');

export const getFormattedTimeFromTimeZone = (timezone: string) => {
  return momentTimezone().tz(timezone).format('MMMM Do YYYY, h:mm:ss a');
};
