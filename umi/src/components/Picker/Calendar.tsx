/*
 * @Author: sheng.wang
 * @Date: 2021-03-03 16:14:41
 * @LastEditTime: 2021-03-03 16:14:49
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/src/components/Picker/Calendar.tsx
 */
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(dayjsGenerateConfig);

export default Calendar;