import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ActionsMenu, Alignment } from './';
import { DoubleChevronRight } from '../../assets/icons/DoubleChevronRight';
import { ActionsMenuProps } from './ActionsMenu';
import { ActionsMenuItemProps } from './Item/ActionsMenuItem';

class ActionsMenuVisual extends React.Component<
  ActionsMenuProps & { mobile?: boolean }
> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile, children } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualTestContainer>
          <ActionsMenu {...this.props}>{children}</ActionsMenu>
        </VisualTestContainer>
      </TPAComponentsProvider>
    );
  }
}

function generateItem(props: Omit<ActionsMenuItemProps, 'onClick'>) {
  return (
    <ActionsMenu.Item
      key={props.content}
      onClick={() => alert('click')}
      {...props}
    />
  );
}

const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {},
        children: [generateItem({ content: 'item 1' })],
      },
      {
        it: 'with subtitle',
        props: {},
        children: [
          generateItem({
            content: 'Content is here',
            subtitle: 'Some subtitle',
          }),
        ],
      },
      {
        it: 'with icon',
        props: {},
        children: [
          generateItem({ content: 'item 1', prefixIcon: DoubleChevronRight }),
        ],
      },
      {
        it: 'with icon and subtitle',
        props: {},
        children: [
          generateItem({
            content: 'item 1',
            subtitle: 'Subtitle',
            prefixIcon: DoubleChevronRight,
          }),
        ],
      },
      {
        it: 'many items with icon and subtitle with right alignment',
        props: {
          alignment: Alignment.right,
        },
        children: [
          generateItem({
            content: 'item 1',
          }),
          generateItem({
            content: 'item 3',
            subtitle: 'Subtitle 2',
          }),
        ],
      },
      {
        it: 'many items with icon and subtitle with center alignment',
        props: {
          alignment: Alignment.center,
        },
        children: [
          generateItem({
            content: 'item 1',
          }),
          generateItem({
            content: 'item 3',
            subtitle: 'Subtitle 2',
          }),
        ],
      },
      {
        it: 'many items with icon and subtitle with right alignment',
        props: {
          alignment: Alignment.right,
        },
        children: [
          generateItem({
            content: 'item 1',
          }),
          generateItem({
            content: 'item 3',
            subtitle: 'Subtitle 2',
          }),
        ],
      },
    ],
  },
  {
    describe: 'mobile',
    its: [
      {
        it: 'default',
        props: {
          mobile: true,
        },
        children: [
          generateItem({
            content: 'item 1',
          }),
          generateItem({
            content: 'item 1',
            subtitle: 'Subtitle here',
          }),
        ],
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props, children }) => {
    storiesOf(`ActionsMenu/${describe}`, module).add(it, () => (
      <ActionsMenuVisual {...props}>{children}</ActionsMenuVisual>
    ));
  });
});
