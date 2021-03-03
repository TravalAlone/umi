/*
 * @Author: sheng.wang
 * @Date: 2021-03-03 16:14:08
 * @LastEditTime: 2021-03-03 16:14:08
 * @LastEditors: sheng.wang
 * @Description:
 * @FilePath: /umi/src/components/Picker/TimePicker.tsx
 */
import { Dayjs } from 'dayjs';
import * as React from 'react';
import DatePicker from './DatePicker';
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker';
import { Omit } from 'antd/es/_util/type';

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = 'TimePicker';

export default TimePicker;