// import * as React from 'react';
// import { storiesOf } from '@storybook/react';
// import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
// import { RadioButton } from './';

// class RadioButtonVisual extends React.Component<any> {
//   render() {
//     return (
//       <VisualTestContainer>
//         <RadioButton {...this.props} onChange={() => {}} value="value" label="label"/>
//       </VisualTestContainer>
//     );
//   }
// }

// const tests = [
//   {
//     describe: 'basic',
//     its: [
//       {
//         it: 'default',
//         props: {},
//       },
//     ],
//   },
// ];

// tests.forEach(({ describe, its }) => {
//   its.forEach(({ it, props }) => {
//     storiesOf(`RadioButton/${describe}`, module).add(it, () => (
//       <RadioButtonVisual {...props} />
//     ));
//   });
// });

import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { RadioButton } from './';
import { RadioButtonProps } from './RadioButton';
import { Omit } from '../../types';

const VisualRadioButton = (
  props: Omit<RadioButtonProps, 'label' | 'onChange' | 'value'>,
) => (
  <RadioButton
    label="label"
    value="value"
    onChange={() => {}}
    {...props}
  />
);

visualize('ShareButton', () => {
  story('render', () => {
    snap('checked', <VisualRadioButton checked />);
    snap('disabled', <VisualRadioButton disabled />);
    snap('default', <VisualRadioButton />);
  });
});
