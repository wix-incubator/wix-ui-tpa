import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Dropdown } from './';
import { optionsWithSections, simpleOptions } from './helpers';
import { onStyleProcessorDone } from '../../../test/visual/StyleProcessorUtil';

class DropdownVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <Dropdown {...this.props} />
      </TPAComponentsProvider>
    );
  }
}

class AsyncDropdownVisual extends React.Component<any> {
  state = {
    newOptions: false,
  };

  componentDidMount() {
    onStyleProcessorDone()
      .then(() => {
        setTimeout(() => {
          this.setState({ newOptions: true }, this.props.done);
        }, 1000);
      })
      .catch(() => {});
  }

  render() {
    const { newOptions } = this.state;
    let options = this.props.options;

    if (newOptions) {
      options = options.map(option => ({
        ...option,
        value: `Async Option ${option.id}`,
      }));
    }

    return <DropdownVisual {...this.props} options={options} />;
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

visualize('Dropdown', () => {
  story('desktop', () => {
    getTests(false).forEach(test => {
      snap(test.it, <DropdownVisual {...test.props} />);
    });
  });

  story('mobile', () => {
    getTests(true).forEach(test => {
      snap(test.it, <DropdownVisual {...test.props} />);
    });
  });

  story('logic', () => {
    const props = {
      placeholder: 'Placeholder text',
      label:
        'Selected value should change when programmatically changing the options',
      options: simpleOptions,
      forceContentElementVisibility: true,
      mobile: false,
      initialSelectedId: simpleOptions[0].id,
    };
    snap('Change value on options change', done => (
      <AsyncDropdownVisual {...props} done={done} />
    ));
  });
});
