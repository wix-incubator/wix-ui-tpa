import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import {ProGallery, ProGalleryProps} from './';
import {TextFieldProps} from '../TextField';

class ProGalleryVisual extends React.Component<ProGalleryProps> {
  static defaultProps: ProGalleryProps = {
    width: 1000,
    height:1000,
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
          width: 300,
          height: 300,
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
