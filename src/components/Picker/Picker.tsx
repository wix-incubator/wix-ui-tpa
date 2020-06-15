import * as React from 'react';
import { Text } from '../Text';
import { PICKER_DATA_HOOKS, PICKER_DATA_PROPS } from './dataHooks';
import { ReactComponent as ChevronLeft } from '../../assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/ChevronRight.svg';
import { IconButton } from '../IconButton';
import { TPAComponentProps } from '../../types';
import styles from './Picker.st.css';

export interface PickerProps extends TPAComponentProps {
  value: any;
  onPrev(): void;
  onNext(): void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

interface DefaultProps {
  prevDisabled: boolean;
  nextDisabled: boolean;
}

/** Picker */
export class Picker extends React.Component<PickerProps> {
  static defaultProps: DefaultProps = {
    prevDisabled: false,
    nextDisabled: false,
  };

  getDataAttributes() {
    const { prevDisabled, nextDisabled } = this.props;

    return {
      [PICKER_DATA_PROPS.NextDisabled]: nextDisabled,
      [PICKER_DATA_PROPS.PrevDisabled]: prevDisabled,
    };
  }

  render() {
    const {
      onPrev,
      value,
      onNext,
      prevDisabled,
      nextDisabled,
      ...rest
    } = this.props;

    return (
      <div {...styles('root', {}, rest)} {...this.getDataAttributes()}>
        <IconButton
          className={styles.arrow}
          icon={<ChevronLeft />}
          as="a"
          onClick={() => (prevDisabled ? null : onPrev())}
          disabled={prevDisabled}
          data-hook={PICKER_DATA_HOOKS.Prev}
        />
        <Text className={styles.value}>{value}</Text>
        <IconButton
          className={styles.arrow}
          as="a"
          icon={<ChevronRight />}
          onClick={() => (nextDisabled ? null : onNext())}
          disabled={nextDisabled}
          data-hook={PICKER_DATA_HOOKS.Next}
        />
      </div>
    );
  }
}
