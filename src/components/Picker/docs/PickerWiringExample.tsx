import * as React from 'react';
import { Picker } from '../';
import styles from './PickerWiringExample.st.css';

export const PickerWiringExample = () => {
  return (
    <Picker
      value={'October 2020'}
      previousClickHandler={() => {}}
      nextClickHandler={() => {}}
      {...styles('root', {})}
    />
  );
};
