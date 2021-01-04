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

const veryLongText = 'Some very very very very very very very very long text';

const extendedProps: Partial<FloatingDropdownProps> = {
  forceContentElementVisibility: true,
};
const preselectedProps: Partial<FloatingDropdownProps> = { value: '3' };

visualize('FloatingDropdown', () => {
  story('basic', () => {
    snap(
      'default',
      <FloatingDropdownVisual {...getFloatingDropdownTestProps()} />,
    );

    snap(
      'expanded',
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({ ...extendedProps })}
      />,
    );

    snap(
      'ellipsis',
      <div style={{ width: 200 }}>
        <FloatingDropdownVisual
          {...getFloatingDropdownTestProps({
            options: [{ id: '1', value: veryLongText, isSelectable: true }],
            value: '1',
          })}
        />
      </div>,
    );
  });

  story('preselected', () => {
    snap(
      'default',
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({ ...preselectedProps })}
      />,
    );

    snap(
      'expanded',
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
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({ disabled: true })}
      />,
    );
  });

  story('displayBlock', () => {
    snap(
      'default',
      <FloatingDropdownVisual
        {...getFloatingDropdownTestProps({ displayBlock: true })}
      />,
    );

    snap(
      'mobile',
      <TPAComponentsProvider value={{ mobile: true }}>
        <FloatingDropdownVisual
          {...getFloatingDropdownTestProps({ displayBlock: true })}
        />
      </TPAComponentsProvider>,
    );
  });

  story('native', () => {
    snap(
      'default',
      <TPAComponentsProvider value={{ mobile: true }}>
        <FloatingDropdownVisual {...getFloatingDropdownTestProps()} />
      </TPAComponentsProvider>,
    );
  });
});
