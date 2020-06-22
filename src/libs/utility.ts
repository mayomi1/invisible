import {ICoordinate} from "../interface";
const momentTimezone = require('moment-timezone');
const geoTz = require('geo-tz');

const getTimeZoneFromGeolocation = (lat: number, lng: number) => {
  return geoTz(lat, lng)[0];
};

export const getLocationCurrentTime = (coordinate: ICoordinate) => {
  const timeZone = getTimeZoneFromGeolocation(coordinate.lat, coordinate.lon);
  return momentTimezone().tz(timeZone).format('MMMM Do YYYY, h:mm:ss a');
};
