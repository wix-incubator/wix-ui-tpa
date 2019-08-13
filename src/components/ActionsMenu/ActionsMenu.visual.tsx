import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { ActionsMenu, Alignment } from './';
import { ReactComponent as ShareIcon } from '../../../assets/icons/Share.svg';

class ActionsMenuVisual extends React.Component<any> {
  static defaultProps = {
    mobile: false,
  };

  render() {
    const { mobile, children } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualContainerElement>
          <ActionsMenu {...this.props}>{children}</ActionsMenu>
        </VisualContainerElement>
      </TPAComponentsProvider>
    );
  }
}

const onClick = () => alert('click');
const tests = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {},
        children: [
          <ActionsMenu.Item key={1} onClick={onClick} content="item 1" />,
        ],
      },
      {
        it: 'with subtitle',
        props: {},
        children: [
          <ActionsMenu.Item
            key={1}
            onClick={onClick}
            content="Content is here"
            subtitle="Some subtitle"
          />,
        ],
      },
      {
        it: 'with icon',
        props: {},
        children: [
          <ActionsMenu.Item
            key={1}
            onClick={onClick}
            content="item 1"
            prefixIcon={<ShareIcon />}
          />,
        ],
      },
      {
        it: 'with icon and subtitle',
        props: {},
        children: [
          <ActionsMenu.Item
            key={1}
            onClick={onClick}
            content="item 1"
            prefixIcon={<ShareIcon />}
            subtitle="Subtitle"
          />,
        ],
      },
      {
        it: 'many items with icon and subtitle',
        props: {
          alignment: Alignment.center,
        },
        children: [
          <ActionsMenu.Item
            key={1}
            onClick={onClick}
            content="item 1"
            prefixIcon={<ShareIcon />}
            subtitle="Subtitle"
          />,
          <ActionsMenu.Item
            key={2}
            onClick={onClick}
            content="item 2"
            prefixIcon={<ShareIcon />}
            subtitle="Subtitle"
          />,
          <ActionsMenu.Item
            key={3}
            onClick={onClick}
            content="item 3"
            prefixIcon={<ShareIcon />}
            subtitle="Subtitle"
          />,
          <ActionsMenu.Item
            key={4}
            onClick={onClick}
            content="item 4"
            prefixIcon={<ShareIcon />}
            subtitle="Subtitle"
          />,
          <ActionsMenu.Item
            key={5}
            onClick={onClick}
            content="item 5"
            prefixIcon={<ShareIcon />}
            subtitle="Subtitle"
          />,
        ],
      },
      {
        it: 'mobile',
        props: {
          mobile: true,
        },
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
