import * as React from 'react';
import { visualize, story, snap } from 'storybook-snapper';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { FloatingDropdown } from './';
import { getFloatingDropdownTestProps } from './test-props';
import { FloatingDropdownProps } from './FloatingDropdown';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

class FloatingDropdownVisual extends React.Component<any> {
  props = getFloatingDropdownTestProps();
  render() {
    return (
      <VisualTestContainer>
        <FloatingDropdown {...this.props} />
      </VisualTestContainer>
    );
  }
}

const extendedProps: Partial<FloatingDropdownProps> = {
  forceContentElementVisibility: true,
};
const preselectedProps: Partial<FloatingDropdownProps> = { value: '3' };

const longTextProps: Partial<FloatingDropdownProps> = {
  value: '1',
  options: [
    {
      id: '1',
      value: 'very very very very very very very long text',
      isSelectable: true,
    },
  ],
};

visualize('FloatingDropdown', () => {
  story('basic', () => {
    snap(
      'default',
      <FloatingDropdownVisual {...getFloatingDropdownTestProps()} />,
    );

    snap(
      'expanded',
      // tslint:disable-next-line:jsx-wrap-multiline
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({ ...extendedProps })}
      />,
    );
  });

  story('preselected', () => {
    snap(
      'default',
      // tslint:disable-next-line:jsx-wrap-multiline
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({ ...preselectedProps })}
      />,
    );

    snap(
      'expanded',
      // tslint:disable-next-line:jsx-wrap-multiline
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({
          ...preselectedProps,
          ...extendedProps,
        })}
      />,
    );
  });

  story('disabled', () => {
    snap(
      'default',
      // tslint:disable-next-line:jsx-wrap-multiline
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({ disabled: true })}
      />,
    );
  });

  story('native', () => {
    snap(
      'default',
      // tslint:disable-next-line:jsx-wrap-multiline
      <TPAComponentsProvider value={{ mobile: true }}>
        <FloatingDropdownVisual {...getFloatingDropdownTestProps()} />
      </TPAComponentsProvider>,
    );
  });

  story('long text', () => {
    snap(
      'long text',
      <div style={{ maxWidth: '150px' }}>
        <FloatingDropdownVisual
          {...getFloatingDropdownTestProps({ ...longTextProps })}
        />
      </div>,
    );
  });
});
