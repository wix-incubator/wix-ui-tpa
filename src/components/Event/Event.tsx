import * as React from 'react';
import { Text } from '../Text';
import styles from './Event.st.css';

export interface EventProps {
  time: string;
  title: string;
  isTimeShown: boolean;
  isMultiday: boolean;
}

interface State {
  isClicked: boolean;
}

interface DefaultProps {
  isTimeShown: boolean;
  isMultiday: boolean;
}

/** Event */
export class Event extends React.Component<EventProps, State> {
  static displayName = 'Event';
  static defaultProps: DefaultProps = {
    isTimeShown: true,
    isMultiday: false,
  };

  state: State = {
    isClicked: false
  }

  handleClick = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const { isClicked } = this.state;
    const { time, title, isTimeShown, isMultiday, ...rest } = this.props;
    const timeComponent = isTimeShown ? (
      <Text className={styles.time}>{time}</Text>
    ) : null;
    return (
      <div onClick={this.handleClick} {...styles('root', { isMultiday, isClicked }, rest)}>
        {timeComponent}
        <Text className={styles.title}>{title}</Text>
      </div>
    );
  }
}
