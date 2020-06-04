import * as React from 'react';
import { Text } from '../Text';
import { PICKER_DATA_HOOKS, PICKER_DATA_KEYS } from './dataHooks';
import { ReactComponent as ChevronLeft } from '../../assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/ChevronRight.svg';
import { IconButton } from '../IconButton';
import styles from './Picker.st.css';

export interface PickerProps {
  value: any;
  onPrev(): void;
  onNext(): void;
  arrowsSize?: string;
  disablePrev?: boolean;
  disableNext?: boolean;
}

interface DefaultProps {
  arrowsSize: string;
  'data-hook': string;
  disablePrev: boolean;
  disableNext: boolean;
}

/** Picker */
export class Picker extends React.Component<PickerProps> {
  static defaultProps: DefaultProps = {
    arrowsSize: '24px',
    'data-hook': PICKER_DATA_HOOKS.PickerWrapper,
    disablePrev: false,
    disableNext: false
  };

  getDataAttributes() {
    const { arrowsSize } = this.props;

    return {
      [PICKER_DATA_KEYS.ArrowsSized]: arrowsSize,
    };
  }

  render() {
    const {
      onPrev,
      value,
      onNext,
      arrowsSize,
      disablePrev,
      disableNext,
      ...rest
    } = this.props;

    return (
      <div
        {...styles('root', {}, rest)}
        data-hook={this.props['data-hook']}
        {...this.getDataAttributes()}
      >
        <IconButton
          className={styles.arrow}
          icon={<ChevronLeft height={arrowsSize} width={arrowsSize} />}
          as="a"
          onClick={() => disablePrev ? null : onPrev()}
          disabled={disablePrev}
        />
        <Text className={styles.value}>{value}</Text>
        <IconButton
          className={styles.arrow}
          as="a"
          icon={<ChevronRight height={arrowsSize} width={arrowsSize} />}
          onClick={() => disableNext ? null : onNext()}
          disabled={disableNext}
        />
      </div>
    );
  }
}
