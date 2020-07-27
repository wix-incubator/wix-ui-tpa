import * as React from 'react';
import { StatesButton, StatesButtonProps } from '..';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import { SIZE } from '../../Button';
import { BUTTON_STATES } from '../constants';

const ref: React.RefObject<StatesButton> = React.createRef();

const defaultProps: StatesButtonProps = {
  disabled: false,
  state: BUTTON_STATES.IDLE,
  idleContent: 'Idle state',
  inProgressContent: 'Loading...',
  failureContent: 'Try Again',
  size: SIZE.large,
};

export default {
  category: 'Components',
  storyName: 'StatesButton',
  component: StatesButton,
  componentPath: '../StatesButton.tsx',

  componentProps: {
    disabled: false,
    onClick: () => {},
    idleContent: 'My States Button',
    inProgressContent: 'Loading...',
    failureContent: 'Try Again',
  },
  exampleProps: {
    state: Object.keys(BUTTON_STATES),
  },
  examples: (
    <>
      <StatesButton {...defaultProps} ref={ref} />
      <MockSettings
        wixNumberParams={[
          {
            label: 'Border Width',
            wixParam: 'borderWidth',
            defaultNumber: 0,
            unit: 'px',
          },
          {
            label: 'Border Radius',
            wixParam: 'borderRadius',
            defaultNumber: 0,
            unit: 'px',
          },
        ]}
        wixFontParams={[
          {
            label: 'Font',
            wixParam: 'buttonTextFont',
            defaultFont: 'arial',
          },
        ]}
        wixColorParams={[
          {
            label: 'Text Color',
            wixParam: 'buttonTextColor',
            defaultColor: 'color-1',
          },
          {
            label: 'Background Color',
            wixParam: 'buttonBackgroundColor',
            defaultColor: 'color-5',
          },
          {
            label: 'Border Color',
            wixParam: 'borderColor',
            defaultColor: 'color-8',
          },
        ]}
      />
    </>
  ),
};
