import * as React from 'react';
import classnames from 'classnames';
import styles from './NewCard.st.css';
import { NEWCARD_DATA_HOOKS, NEWCARD_DATA_KEYS } from './dataHooks';

export interface NewCardProps {
  stacked?: boolean;
  className?: string;
  'data-hook'?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  minWidth?: number;
  className?: string;
  'data-hook'?: string;
}

interface DefaultProps {
  stacked: false;
  'data-hook': string;
}

const Container: React.FunctionComponent<ContainerProps> = props => {
  const { className, children, minWidth } = props;
  return (
    <div
      style={{ flexBasis: `${minWidth}px` }}
      className={classnames(styles.container, className)}
      data-hook={props['data-hook'] || NEWCARD_DATA_HOOKS.NewCardContainer}
    >
      {children}
    </div>
  );
};

/** An implementation of NewCard for TPAs */
export class NewCard extends React.Component<NewCardProps> {
  static displayName = 'NewCard';
  static defaultProps: DefaultProps = {
    stacked: false,
    'data-hook': NEWCARD_DATA_HOOKS.NewCardRoot,
  };

  static Container = Container;

  getDataAttributes() {
    const { stacked } = this.props;

    return {
      [NEWCARD_DATA_KEYS.Stacked]: stacked,
    };
  }

  render() {
    const { stacked, children, className, ...rest } = this.props;

    return (
      <section
        data-hook={this.props['data-hook']}
        {...this.getDataAttributes()}
        {...styles(classnames('root', className), { stacked }, rest)}
      >
        {children}
      </section>
    );
  }
}
