import * as React from 'react';
import { Text } from '../Text';
import ChevronRight from 'wix-ui-icons-common/ChevronRight';
import ChevronLeft from 'wix-ui-icons-common/ChevronLeft';
import styles from './Picker.st.css';

export interface PickerProps {
  value: any;
  previousClickHandler(): void;
  nextClickHandler(): void;
}

interface DefaultProps {}

interface State {}

/** Picker */
export class Picker extends React.Component<PickerProps, State> {
  static defaultProps: DefaultProps = {};

  render() {
    const {
      previousClickHandler,
      value,
      nextClickHandler,
      ...rest
    } = this.props;

    return (
      <div {...styles('root', {}, rest)}>
        <ChevronLeft
          className={styles.navigator}
          onClick={previousClickHandler}
        />
        <Text className={styles.value}>{value}</Text>
        <ChevronRight className={styles.navigator} onClick={nextClickHandler} />
      </div>
    );
  }
}