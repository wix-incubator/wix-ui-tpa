import * as React from 'react';
import styles from './LikeButton.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ReactComponent as Heart } from '../../icons/raw/Heart.svg';
import { IconToggle, Placement, OnChangeEvent } from '../IconToggle';

export interface LikeButtonProps {
  label: React.ReactNode | string;
  labelPlacement: Placement;
  checked: boolean;
  onChange?: (event: OnChangeEvent) => void;
  disabled: boolean;
  color: string;
}

interface DefaultProps {
  label: number;
  labelPlacement: Placement;
  checked: boolean;
  disabled: boolean;
  color: string;
}

/** like button */
export class LikeButton extends React.Component<LikeButtonProps> {
  static displayName = 'LikeButton';
  static defaultProps: DefaultProps = { 
    label: 0,
    labelPlacement: 'right',
    checked: false,
    disabled: false,
    color: '#000',
  };

  render() {
    const { label, labelPlacement, onChange, checked, disabled, color, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <div {...styles('root', { mobile }, rest)}>
            <div className={styles.likeButton}>
              <IconToggle 
                icon={Heart}
                label={label}
                onChange={onChange}
                checked={checked}
                labelPlacement={labelPlacement} />
            </div>
          </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
