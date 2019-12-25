import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { ProGallery, ProGalleryProps } from './';
import { domId, proGalleryItems, proGalleryOptions } from './docs/examples';
import * as _ from 'lodash';

class ProGalleryVisual extends React.Component<ProGalleryProps> {
  static defaultProps: ProGalleryProps = {
    width: 1000,
    height: 1000,
    items: proGalleryItems,
    options: proGalleryOptions[0],
    eventsListener: _.noop,
    scrollingElement: e => e.target.parentElement,
    domId,
  };

  render() {
    return (
      <VisualTestContainer>
        <ProGallery {...this.props} />
      </VisualTestContainer>
    );
  }
}
interface Test {
  describe: string;
  its: {
    it: string;
    props: Partial<ProGalleryProps>;
  }[];
}

const tests: Test[] = [
  {
    describe: 'basic',
    its: [
      {
        it: 'default',
        props: {
          width: 1000,
          height: 1000,
          items: proGalleryItems,
          options: proGalleryOptions[0],
          eventsListener: _.noop,
          scrollingElement: e => e.target.parentElement,
          domId,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`ProGallery/${describe}`, module).add(it, () => (
      <ProGalleryVisual {...props} />
    ));
  });
});
