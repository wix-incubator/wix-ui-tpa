import * as React from 'react';
import { StatesButton } from '..';
import extendedStyles from './StatesButtonExample.st.css';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import { SIZE } from '../../Button';

const ref: React.RefObject<StatesButton> = React.createRef();

const defaultProps = {
  disabled: false,
  onClick: () => {
    // tslint:disable-next-line:no-floating-promises
    ref.current.onProgressReset();
  },
  size: SIZE.large,
  text: 'My States Button',
};

export default {
  category: 'Components',
  storyName: 'StatesButton',
  component: StatesButton,
  componentPath: '../StatesButton.tsx',

  componentProps: {
    disabled: false,
    onClick: () => {},
    text: 'My States Button',
  },
  exampleProps: {},
  examples: (
    <>
      <StatesButton
        {...defaultProps}
        ref={ref}
        {...extendedStyles('root', {}, {})}
      />
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
