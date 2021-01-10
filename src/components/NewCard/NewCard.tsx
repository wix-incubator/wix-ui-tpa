import * as React from 'react';
import classnames from 'classnames';
import { TPAComponentProps } from '../../types';
import { st, classes } from './NewCard.st.css';
import { NEWCARD_DATA_HOOKS, NEWCARD_DATA_KEYS } from './dataHooks';

export interface NewCardProps extends TPAComponentProps {
  stacked?: boolean;
}

export interface ContainerProps extends TPAComponentProps {
  children: React.ReactNode;
  minWidth?: number | string;
}

interface DefaultProps {
  stacked: false;
}

const Container: React.FunctionComponent<ContainerProps> = (props) => {
  const { className, children, minWidth } = props;
  return (
    <div
      style={{ flexBasis: minWidth }}
      className={classnames(classes.container, className)}
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
  };

  static Container = Container;

  getDataAttributes() {
    const { stacked } = this.props;

    return {
      [NEWCARD_DATA_KEYS.Stacked]: stacked,
    };
  }

  render() {
    const { stacked, children, className } = this.props;

    return (
      <section
        data-hook={this.props['data-hook']}
        className={st(classes.root, { stacked }, className)}
        {...this.getDataAttributes()}
      >
        {children}
      </section>
    );
  }
}
