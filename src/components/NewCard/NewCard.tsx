import * as React from 'react';
import styles from './NewCard.st.css';

export interface NewCardProps {
  stacked?: boolean;
}

interface DefaultProps {
  stacked: boolean;
}

interface ContainerProps {
  children?: React.ReactNode;
  minWidth?: number;
}

function Container({ className, children, minWidth = 0 }) {
  const style = {} as any;

  if (minWidth) {
    style.flexShrink = 0;
    style.flexGrow = 1;
    style.flexBasis = minWidth;
  }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
function MediaContainer({ children, minWidth }: ContainerProps) {
  return Container({ className: styles.media, children, minWidth });
}
function InfoContainer({ children, minWidth }: ContainerProps) {
  return Container({ className: styles.info, children, minWidth });
}

/** The best card ever */
export class NewCard extends React.Component<NewCardProps> {
  static displayName = 'NewCard';
  static defaultProps: DefaultProps = { stacked: false };

  static InfoContainer = InfoContainer;
  static MediaContainer = MediaContainer;

  render() {
    const { children, stacked, ...rest } = this.props;

    return <div {...styles('root', { stacked }, rest)}>{children}</div>;
  }
}
