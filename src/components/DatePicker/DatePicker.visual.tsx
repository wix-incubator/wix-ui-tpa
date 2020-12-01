import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { DatePicker } from './';

visualize('DatePicker', () => {
  story('simple example', () => {
    snap(
      'default props',
      <DatePicker value={new Date()} onChange={() => {}} />,
    );
    snap(
      'Without a selected date',
      <DatePicker
        value=""
        onChange={() => {}}
        placeholderText="Select A Date"
      />,
    );
    snap(
      'Disabled Mode',
      <DatePicker
        value={new Date('2020/09/20')}
        onChange={() => {}}
        placeholderText="Select A Date"
        disabled
      />,
    );
    snap(
      'Error mode',
      <DatePicker
        value={new Date('2020/09/20')}
        onChange={() => {}}
        placeholderText="Select A Date"
        hasError
        errorMessage="Error Message"
      />,
    );
  });
});
