import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { ProgressBar } from './';

visualize('ProgressBar', () => {
  story('simple example', () => {
    snap('default props', <ProgressBar />);
    snap(
      'custom value with percentage',
      <ProgressBar value={20} showProgressIndication />,
    );
    snap('custom value 33%', <ProgressBar value={33} showProgressIndication />);
    snap(
      'custom value 100%',
      <ProgressBar value={100} showProgressIndication />,
    );
    snap(
      'custom value RTL',
      <div dir="rtl">
        <ProgressBar value={100} showProgressIndication />
      </div>,
    );
  });
});
