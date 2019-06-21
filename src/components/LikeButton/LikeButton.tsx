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
  label: number;
  labelPlacement: LabelPlacement;
  checked: boolean;
  disabled: boolean;
}

interface State {
  checking: boolean;
}

export class LikeButton extends React.Component<LikeButtonProps, State> {
  static displayName = 'LikeButton';
  static defaultProps: DefaultProps = {
    label: 0,
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
  };

  state = { checking: false };

  componentDidUpdate = prevProps => {
    const { checked } = this.props;
    if (checked && checked !== prevProps.checked) {
      this.setState({ checking: true });
    }
  };

  _handleHoverOff = () => {
    this.state.checking && this.setState({ checking: false });
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

    const { checking } = this.state;

    return (
      <div className={styles.likeButton} onMouseLeave={this._handleHoverOff}>
        <IconToggle
          {...styles('root', { checked, disabled, checking }, rest)}
          icon={<Heart />}
          label={`${label}`}
          disabled={disabled}
          onChange={onChange}
          checked={checked}
          labelPlacement={labelPlacement}
        />
      </div>
    );
  }
}
