import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';

import { DatePicker } from './';
import { classes } from './DatePicker.visual.st.css';

const VisualTestDatePicker = (props) => {
  const { width, ...rest } = props;

  return (
    <div style={{ width }}>
      <DatePicker {...rest} />
    </div>
  );
};

visualize('DatePicker', () => {
  story('simple', () => {
    snap(
      'default props',
      <VisualTestDatePicker
        width="280px"
        value={new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
    snap(
      'responsiveness',
      <VisualTestDatePicker
        width="600px"
        value={new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
    snap(
      'FilterDate - Prior for today dates (includes today)',
      <VisualTestDatePicker
        width="280px"
        value={new Date('2019/12/15')}
        filterDate={(date) => date <= new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
    snap(
      'FilterDate - future dates only (includes today)',
      <VisualTestDatePicker
        width="280px"
        value={new Date('2019/12/15')}
        filterDate={(date) => date >= new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
    snap(
      'Months dropdown',
      <VisualTestDatePicker
        width="280px"
        value={new Date('2019/12/15')}
        showMonthDropdown
        onChange={() => {}}
      />,
    );
    snap(
      'Years dropdown',
      <VisualTestDatePicker
        width="280px"
        value={new Date('2019/12/15')}
        showYearDropdown
        onChange={() => {}}
      />,
    );
    snap(
      'Months and years dropdown',
      <VisualTestDatePicker
        width="280px"
        value={new Date('2019/12/15')}
        showMonthDropdown
        showYearDropdown
        onChange={() => {}}
      />,
    );
    snap(
      'Date Indication',
      <VisualTestDatePicker
        width="280px"
        value={new Date('2019/12/12')}
        onChange={() => {}}
        dateIndication={({ date, isSelected }) =>
          date <= new Date('2019/12/15') ? (
            <div
              className="Indications"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                className="indication"
                style={{
                  borderRadius: '50%',
                  width: '3px',
                  height: '3px',
                  backgroundColor: '#ED24D9',
                }}
              />
            </div>
          ) : null
        }
      />,
    );
    snap(
      'Adaptive to font change',
      <VisualTestDatePicker
        className={classes.dayFontSizeOverride}
        width="650px"
        value={new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
    snap(
      'Selected day border radius',
      <VisualTestDatePicker
        className={classes.selectedDayBorderRadius}
        width="280px"
        value={new Date('2019/12/15')}
        onChange={() => {}}
      />,
    );
  });
});
