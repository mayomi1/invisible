"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedTimeFromTimeZone = void 0;
const momentTimezone = require('moment-timezone');
exports.getFormattedTimeFromTimeZone = (timezone) => {
    return momentTimezone().tz(timezone).format('MMMM Do YYYY, h:mm:ss a');
};
//# sourceMappingURL=utility.js.map