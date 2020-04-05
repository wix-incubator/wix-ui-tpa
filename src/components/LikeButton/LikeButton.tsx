import * as React from 'react';
import styles from './LikeButton.st.css';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { IconToggle, LabelPlacement, OnChangeEvent } from '../IconToggle';
import { TPAComponentProps } from '../../types';

export interface LikeButtonProps extends TPAComponentProps {
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  checked: boolean;
  onChange?(event: OnChangeEvent): void;
  disabled: boolean;
}

interface DefaultProps {
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  checked: boolean;
  disabled: boolean;
}

export class LikeButton extends React.Component<LikeButtonProps> {
  static displayName = 'LikeButton';
  static defaultProps: DefaultProps = {
    label: '',
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
  };

  render() {
    const {
      label,
      labelPlacement,
      onChange,
      checked,
      disabled,
      ...rest
    } = this.props;

    return (
      <div className={styles.likeButton}>
        <IconToggle
          {...styles('root', { checked, disabled}, rest)}
          icon={<Heart />}
          label={label}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          labelPlacement={labelPlacement}
          animation
        />
      </div>
    );
  }
}
