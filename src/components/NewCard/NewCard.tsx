import * as React from 'react';
import styles from './NewCard.st.css';

export interface NewCardProps {
  buttonText: string;
}

interface DefaultProps {
  buttonText: string;
}

interface State {
  count: number;
}

/** An implementation of NewCard for TPAs */
export class NewCard extends React.Component<NewCardProps, State> {
  static displayName = 'NewCard';
  static defaultProps: DefaultProps = { buttonText: 'Click me!' };

  render() {
    const { ...rest } = this.props;

    return <div {...styles('root', {}, rest)}></div>;
  }
}
