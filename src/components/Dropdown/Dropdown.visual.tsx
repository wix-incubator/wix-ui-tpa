import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Dropdown } from './';
import { optionsWithSections, simpleOptions } from './helpers';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';

const optionsWithIconAndSubtitles = [
  {
    id: '1',
    value: 'Share 01',
    subtitle: 'Subtitle Share 01',
    isSelectable: true,
    icon: <Heart />,
  },
  {
    id: '2',
    value: 'Share 02',
    subtitle: 'Subtitle Share 02',
    isSelectable: true,
    icon: <Heart />,
  },
];

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

function getTests(isMobile = false) {
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
    {
      it: 'With Icon',
      props: {
        placeholder: 'Placeholder text',
        label: 'Label Text',
        options: optionsWithIconAndSubtitles,
        initialSelectedId: optionsWithIconAndSubtitles[0].id,
        forceContentElementVisibility: true,
        mobile: isMobile,
      },
    },
  ];
}

visualize('Dropdown', () => {
  story('desktop', () => {
    getTests().map((testConfig) => {
      snap(testConfig.it, <DropdownVisual {...testConfig.props} />);
    });
  });

  story('mobile', () => {
    getTests(true).map((testConfig) => {
      snap(testConfig.it, <DropdownVisual {...testConfig.props} />);
    });
  });
});
