import * as React from 'react';
import { st, classes } from './LikeButton.st.css';
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
      className,
    } = this.props;

    return (
      <div className={classes.likeButton}>
        <IconToggle
          className={st(classes.root, { checked, disabled }, className)}
          icon={<Heart />}
          label={label}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          labelPlacement={labelPlacement}
          animation
          data-hook={this.props['data-hook']}
        />
      </div>
    );
  }
}
