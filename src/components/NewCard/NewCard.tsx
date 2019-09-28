import * as React from 'react';
import classnames from 'classnames';
import styles from './NewCard.st.css';

//based on https://zeroheight.com/7sjjzhgo2/p/19342a/b/10ada1/t/79b426
//there is will be a more options for layout
export const enum CardLayout {
  Stacked = 'stacked',
}

export interface NewCardProps {
  layout: CardLayout;
  className?: string;
  'data-hook'?: string;
}

interface ContainerProps {
  children?: React.ReactNode;
  minWidth?: number;
  className?: string;
  'data-hook'?: string;
}

interface DefaultProps {
  layout: CardLayout;
}

const Container: React.FunctionComponent<ContainerProps> = props => {
  return <div data-hook={props['data-hook']}>dss</div>;
};

/** An implementation of NewCard for TPAs */
export class NewCard extends React.Component<NewCardProps> {
  static displayName = 'NewCard';
  static defaultProps: DefaultProps = {
    layout: CardLayout.Stacked,
  };

  static Container = Container;

  render() {
    const { layout, children, className, ...rest } = this.props;

    return (
      <section
        data-hook={this.props['data-hook']}
        {...styles(classnames('root', className), { layout }, rest)}
      >
        {children}
      </section>
    );
  }
}
