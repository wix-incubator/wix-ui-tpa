import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Tags, TagsProps } from './';
import { TagsDriver } from './Tags.driver';
import { TPAComponentsProvider } from '../TPAComponentsConfig';

const items = [0, 1, 2, 4].map(i => ({
  title: `Title ${i}`,
  value: `value ${i}`,
  checked: i % 2 === 0,
}));
const dataHook = 'storybook-e2e-Tags';

interface TagsVisualProps {
  tagsProps: TagsProps;
  rtl: boolean;
  compact?: boolean;
}

class TagsVisual extends React.Component<TagsVisualProps> {
  static defaultProps = {
    tagsProps: {},
    rtl: false,
  };
  private readonly driver: TagsDriver;

  render() {
    const { tagsProps, rtl, compact } = this.props;
    const style = compact ? { margin: '10px', maxWidth: 200 } : undefined;

    return (
      <TPAComponentsProvider value={{ rtl }}>
        <VisualTestContainer>
          <div style={style}>
            <Tags data-hook={dataHook} {...tagsProps} />
          </div>
        </VisualTestContainer>
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
        props: {
          items,
          onClick: () => {},
        },
      },
      {
        it: 'rtl',
        props: {
          rtl: true,
          items,
          onClick: () => {},
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Tags/${describe}`, module).add(it, () => (
      <TagsVisual {...props} />
    ));
  });
});
