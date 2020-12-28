import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';

import { DatePicker } from './';

visualize('DatePicker', () => {
  story('simple', () => {
    snap(
      'default props',
      <div style={{ width: '280px' }}>
        <DatePicker value={new Date('2019/12/15')} onChange={() => {}} />
      </div>,
    );
    snap(
      'responsiveness',
      <div style={{ width: '600px' }}>
        <DatePicker
          value={new Date('2019/12/15')}
          onChange={() => {}}
        />
      </div>,
    );
    snap(
      'FilterDate - Prior for today dates (includes today)',
      <div style={{ width: '280px' }}>
        <DatePicker
          value={new Date('2019/12/15')}
          filterDate={(date) => date <= new Date('2019/12/15')}
          onChange={() => {}}
        />
      </div>,
    );
    snap(
      'FilterDate - future dates only (includes today)',
      <div style={{ width: '280px' }}>
        <DatePicker
          value={new Date('2019/12/15')}
          filterDate={(date) => date >= new Date('2019/12/15')}
          onChange={() => {}}
        />
      </div>,
    );
    snap(
      'Months dropdown',
      <div style={{ width: '280px' }}>
        <DatePicker
          value={new Date('2019/12/15')}
          showMonthDropdown
          onChange={() => {}}
        />
      </div>,
    );
    snap(
      'Years dropdown',
      <div style={{ width: '280px' }}>
        <DatePicker
          value={new Date('2019/12/15')}
          showYearDropdown
          onChange={() => {}}
        />
        ,
      </div>,
    );
    snap(
      'Months and years dropdown',
      <div style={{ width: '280px' }}>
        <DatePicker
          value={new Date('2019/12/15')}
          showMonthDropdown
          showYearDropdown
          onChange={() => {}}
        />
      </div>,
    );
  });
});
