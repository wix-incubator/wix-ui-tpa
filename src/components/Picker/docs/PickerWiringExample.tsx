import * as React from 'react';
import { Picker } from '../';
import styles from './PickerWiringExample.st.css';

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const PickerWiringExample = () => {
  const [monthIndex, setMonthIndex] = React.useState(5);
  return (
    <Picker
      value={month[monthIndex]}
      onPrev={() => setMonthIndex(monthIndex - 1)}
      onNext={() => {
        setMonthIndex(monthIndex + 1);
      }}
      {...styles('root', {})}
      disableNext={monthIndex === month.length - 1}
      disablePrev={monthIndex === 0}
    />
  );
};
