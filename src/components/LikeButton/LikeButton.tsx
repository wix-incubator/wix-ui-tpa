import * as React from 'react';
import styles from './LikeButton.st.css';
import { ReactComponent as Heart } from '../../assets/icons/Heart.svg';
import { IconToggle, LabelPlacement, OnChangeEvent } from '../IconToggle';

export interface LikeButtonProps {
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

interface State {
  animated: boolean;
}

export class LikeButton extends React.Component<LikeButtonProps, State> {
  static displayName = 'LikeButton';
  static defaultProps: DefaultProps = {
    label: '',
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
  };

  state = { animated: false };

  componentDidUpdate = prevProps => {
    const { checked } = this.props;

    if (checked && checked !== prevProps.checked) {
      this.setState({ animated: true });
    } else if (!checked && checked !== prevProps.checked) {
      this.setState({ animated: false });
    }
  };

  _handleHoverOff = () => {
    this.state.animated && this.setState({ animated: false });
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

    const { animated } = this.state;

    return (
      <div className={styles.likeButton} onMouseLeave={this._handleHoverOff}>
        <IconToggle
          {...styles('root', { checked, disabled, animated }, rest)}
          icon={<Heart />}
          label={label}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          labelPlacement={labelPlacement}
        />
      </div>
    );
  }
}
