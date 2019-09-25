import * as React from 'react';
import styles from './NewCard.st.css';
import { TPAComponentProps } from '../../types';

export interface NewCardProps extends TPAComponentProps {
  stacked?: boolean;
}

interface DefaultProps {
  stacked: boolean;
}

interface ContainerProps extends TPAComponentProps {
  children?: React.ReactNode;
  minWidth?: number;
  className?: string;
}

function Container({ className, children, minWidth = 0 }: ContainerProps) {
  const style = {} as any;

  if (minWidth) {
    style.flexShrink = 0;
    style.flexGrow = 1;
    style.flexBasis = minWidth;
  }

  return (
    <div className={className + ' ' + styles.container} style={style}>
      {children}
    </div>
  );
}

export class NewCard extends React.Component<NewCardProps> {
  static displayName = 'NewCard';
  static defaultProps: DefaultProps = { stacked: false };

  static Container = Container;

  render() {
    const { children, stacked, ...rest } = this.props;

    return <div {...styles('root', { stacked }, rest)}>{children}</div>;
  }
}
