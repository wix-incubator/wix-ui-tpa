import * as React from 'react';
import { Text } from '../Text';
import { PICKER_DATA_HOOKS } from './dataHooks';
import { ReactComponent as ChevronLeft } from '../../assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/ChevronRight.svg';
import { IconButton } from '../IconButton';
import { TPAComponentProps } from '../../types';
import styles from './Picker.st.css';

export interface PickerProps extends TPAComponentProps {
  options?: Array<string>;
  currentIndex?: number;
  onPrev(): void;
  onNext(): void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

interface DefaultProps {
  prevDisabled: boolean;
  nextDisabled: boolean;
  currentIndex: number;
  options: Array<string>;
}

/** Picker */
export class Picker extends React.Component<PickerProps> {
  static defaultProps: DefaultProps = {
    prevDisabled: false,
    nextDisabled: false,
    currentIndex: 0,
    options: []
  };

  getDataAttributes() {
    const {} = this.props;

    return {};
  }

  renderOptions() {
    const { options, currentIndex } = this.props;
    return options && options.map && options.map((option, optionIndex) => {
      const optionClass = currentIndex === optionIndex ? styles.shownOption : styles.hiddenOption;
      return <Text key={optionIndex} className={optionClass}> {option} </Text>
    })
  }

  render() {
    const {
      onPrev,
      onNext,
      prevDisabled,
      nextDisabled,
      ...rest
    } = this.props;

    const options = this.renderOptions();

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
        {options}
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
