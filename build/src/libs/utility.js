"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedTimeFromTimeZone = void 0;
const momentTimezone = require('moment-timezone');
const geoTz = require('geo-tz');
const getTimeZoneFromGeolocation = (lat, lng) => {
    return geoTz(lat, lng)[0];
};
exports.getFormattedTimeFromTimeZone = (coordinate) => {
    const timeZone = getTimeZoneFromGeolocation(coordinate.lat, coordinate.lon);
    return momentTimezone().tz(timeZone).format('MMMM Do YYYY, h:mm:ss a');
};
//# sourceMappingURL=utility.js.map