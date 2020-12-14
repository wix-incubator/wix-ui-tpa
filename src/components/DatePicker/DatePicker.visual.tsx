import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';

import { DatePicker } from './';

visualize('DatePicker', () => {
  story('simple', () => {
    snap(
      'default props',
      <DatePicker
          value={new Date('2019/12/15')}
          onChange={() => {}}
      />,
    );
    snap(
      'FilterDate - Prior for today dates (includes today)',
      <DatePicker
        value={new Date('2019/12/15')}
        filterDate={date => date <= new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
    snap(
      'FilterDate - feature dates only (includes today)',
      <DatePicker
        value={new Date('2019/12/15')}
        filterDate={date => date >= new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
    snap(
      'Months dropdown',
      <DatePicker
        value={new Date('2019/12/15')}
        showMonthDropdown
        onChange={() => {}}
      />,
    );
    snap(
      'Years dropdown',
      <DatePicker
        value={new Date('2019/12/15')}
        showYearDropdown
        onChange={() => {}}
      />,
    );
    snap(
      'Months and years dropdown',
      <DatePicker
        value={new Date('2019/12/15')}
        showMonthDropdown
        showYearDropdown
        onChange={() => {}}
      />,
    );
  });
});
