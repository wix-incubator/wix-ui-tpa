import * as React from 'react';
import { Text } from '../Text';
import { PICKER_DATA_HOOKS, PICKER_DATA_PROPS } from './dataHooks';
import { ReactComponent as ChevronLeft } from '../../assets/icons/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/ChevronRight.svg';
import { IconButton } from '../IconButton';
import { TPAComponentProps } from '../../types';
import { st, classes } from './Picker.st.css';

export interface PickerProps extends TPAComponentProps {
  value: any;
  onPrev(): void;
  onNext(): void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
  prevAriaLabel?: string;
  nextAriaLabel?: string;
}

interface DefaultProps {
  prevDisabled: boolean;
  nextDisabled: boolean;
  prevAriaLabel: string;
  nextAriaLabel: string;
}

/** Picker */
export class Picker extends React.Component<PickerProps> {
  static defaultProps: DefaultProps = {
    prevDisabled: false,
    nextDisabled: false,
    prevAriaLabel: '',
    nextAriaLabel: '',
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
      prevAriaLabel,
      nextAriaLabel,
      className,
    } = this.props;

    return (
      <div
        data-hook={this.props['data-hook']}
        className={st(classes.root, {}, className)}
        {...this.getDataAttributes()}
      >
        <IconButton
          className={classes.arrow}
          icon={<ChevronLeft />}
          onClick={() => (prevDisabled ? null : onPrev())}
          disabled={prevDisabled}
          data-hook={PICKER_DATA_HOOKS.Prev}
          title={PICKER_DATA_HOOKS.Prev}
          aria-label={prevAriaLabel}
        />
        <Text role="status" className={classes.value}>
          {value}
        </Text>
        <IconButton
          className={classes.arrow}
          icon={<ChevronRight />}
          onClick={() => (nextDisabled ? null : onNext())}
          disabled={nextDisabled}
          data-hook={PICKER_DATA_HOOKS.Next}
          title={PICKER_DATA_HOOKS.Next}
          aria-label={nextAriaLabel}
        />
      </div>
    );
  }
}
