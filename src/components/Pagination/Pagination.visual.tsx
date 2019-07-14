import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualContainerElement } from '../../../test/visual/VisualContainerElement';
import { Pagination, PaginationProps } from './Pagination';

interface IPaginationVisualProps extends PaginationProps {
  mobile?: boolean;
}

class PaginationVisual extends React.Component<IPaginationVisualProps> {
  render() {
    const { mobile } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile }}>
        <VisualContainerElement>
          <Pagination data-hook={'storybook-e2e-LikeButton'} {...this.props} />
        </VisualContainerElement>
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
          totalPages: 10,
        },
      },
      {
        it: 'mobile',
        props: {
          mobile: true,
          totalPages: 10,
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(`Pagination/${describe}`, module).add(it, () => (
      <PaginationVisual {...props} />
    ));
  });
});
