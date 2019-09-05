import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ActionsMenu, Alignment } from './';
import { DoubleChevronRight } from '../../assets/icons/DoubleChevronRight';

class ActionsMenuVisual extends React.Component<any> {
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

function generateItem(props) {
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
        it: 'mobile',
        props: {
          mobile: true,
        },
        children: [
          generateItem({
            content: 'item 1',
          }),
          generateItem({
            content: 'item 2',
            subtitle: 'Subtitle',
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
