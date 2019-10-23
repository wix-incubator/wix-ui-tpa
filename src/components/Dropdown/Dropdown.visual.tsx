import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Dropdown } from './';
import { optionsWithSections, simpleOptions } from './helpers';

class DropdownVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualTestContainer>
          <Dropdown {...this.props} />
        </VisualTestContainer>
      </TPAComponentsProvider>
    );
  }
}

function getTests(isMobile) {
  return [
    {
      it: 'Simple',
      props: {
        placeholder: 'Placeholder text',
        options: simpleOptions,
        forceContentElementVisibility: true,
        mobile: isMobile,
      },
    },
    {
      it: 'Error',
      props: {
        placeholder: 'Placeholder text',
        error: true,
        errorMessage: 'The coupon code is not valid',
        options: simpleOptions,
        forceContentElementVisibility: true,
        mobile: isMobile,
      },
    },
    {
      it: 'Complex',
      props: {
        placeholder: 'Placeholder text',
        label: 'Label Text',
        error: true,
        errorMessage: 'The coupon code is not valid',
        options: optionsWithSections,
        forceContentElementVisibility: true,
        mobile: isMobile,
      },
    },
  ];
}

const tests = [
  {
    describe: 'desktop',
    its: getTests(false),
  },
  {
    describe: 'mobile',
    its: getTests(true),
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Dropdown/${describe}`, module).add(it, () => (
      <DropdownVisual {...props} />
    ));
  });
});
