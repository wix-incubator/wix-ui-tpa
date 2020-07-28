import * as React from 'react';
import { Picker } from '../';
import { st, classes } from './PickerWiringExample.st.css';

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
      className={st(classes.root, {})}
      nextDisabled={monthIndex === month.length - 1}
      prevDisabled={monthIndex === 0}
    />
  );
};
