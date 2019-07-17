import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { Badge } from './';
import {VisualContainerElement} from "../../../test/visual/VisualContainerElement";

class BadgeVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualContainerElement>
          <Badge {...this.props} />
        </VisualContainerElement>
      </TPAComponentsProvider>
    );
  }
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {},
      }
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Badge/${describe}`, module).add(it, () => (
      <BadgeVisual {...props} />
    ));
  });
});
