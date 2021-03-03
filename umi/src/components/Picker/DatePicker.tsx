/*
 * @Author: sheng.wang
 * @Date: 2021-03-03 16:07:32
 * @LastEditTime: 2021-03-03 16:07:33
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/src/components/Picker/DatePicker.tsx
 */
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;