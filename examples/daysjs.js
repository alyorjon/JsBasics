"use strict";
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone';

// Apply the required plugin
dayjs.extend(timezone);
const currentDate = dayjs().tz('Asia/Tashkent');
const formattedDate = currentDate.format('YYYY-MM-DD HH:mm:ss');
console.log(formattedDate);
