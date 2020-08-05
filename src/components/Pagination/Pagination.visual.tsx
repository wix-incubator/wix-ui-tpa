import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TPAComponentsProvider } from '../TPAComponentsConfig';
import { VisualTestContainer } from '../../../test/visual/VisualTestContainer';
import { Pagination, PaginationProps } from './Pagination';

interface IPaginationVisualProps extends PaginationProps {
  mobile?: boolean;
}

class PaginationVisual extends React.Component<IPaginationVisualProps> {
  render() {
    const { mobile, rtl } = this.props;

    return (
      <TPAComponentsProvider value={{ mobile, rtl }}>
        <VisualTestContainer>
          <Pagination data-hook={'storybook-e2e-LikeButton'} {...this.props} />
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
      {
        it: 'rtl',
        props: {
          rtl: true,
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
