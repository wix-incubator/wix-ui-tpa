import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';

import { DatePicker } from './';


const VisualTestDatePicker = (props) => {
    const { width, ...rest } = props;

    return (
        <div style={{ width }} >
            <DatePicker {...rest} />
        </div>
    );
};

visualize('DatePicker', () => {
  story('simple', () => {
    snap(
      'default props',
        <VisualTestDatePicker width="280px" value={new Date('2019/12/15')} onChange={() => {}} />
    );
    snap(
      'responsiveness',
      <VisualTestDatePicker width="600px" value={new Date('2019/12/15')} onChange={() => {}} />
    );
    snap(
      'FilterDate - Prior for today dates (includes today)',
      <VisualTestDatePicker
          width="280px"
          value={new Date('2019/12/15')}
          filterDate={(date) => date <= new Date('2019/12/15')}
          onChange={() => {}}
      />
    );
    snap(
      'FilterDate - future dates only (includes today)',
        <VisualTestDatePicker
         width="280px"
         value={new Date('2019/12/15')}
         filterDate={(date) => date >= new Date('2019/12/15')}
         onChange={() => {}}
        />
    );
    snap(
      'Months dropdown',
        <VisualTestDatePicker
          width="280px"
          value={new Date('2019/12/15')}
          showMonthDropdown
          onChange={() => {}}
        />
    );
    snap(
      'Years dropdown',
        <VisualTestDatePicker
          width="280px"
          value={new Date('2019/12/15')}
          showYearDropdown
          onChange={() => {}}
        />
    );
    snap(
      'Months and years dropdown',
      <VisualTestDatePicker
          width="280px"
          value={new Date('2019/12/15')}
          showMonthDropdown
          showYearDropdown
          onChange={() => {}}
      />
    );
  });
});
