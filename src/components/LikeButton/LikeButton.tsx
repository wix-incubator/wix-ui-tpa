import * as React from 'react';
import styles from './LikeButton.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ReactComponent as Heart } from '../../icons/raw/Heart.svg';
import { IconToggle, LabelPlacement, OnChangeEvent } from '../IconToggle';

export interface LikeButtonProps {
  label: React.ReactNode | string;
  labelPlacement: LabelPlacement;
  checked: boolean;
  onChange?: (event: OnChangeEvent) => void;
  disabled: boolean;
}

interface DefaultProps {
  label: number;
  labelPlacement: LabelPlacement;
  checked: boolean;
  disabled: boolean;
}

/** like button */
export class LikeButton extends React.Component<LikeButtonProps> {
  static displayName = 'LikeButton';
  static defaultProps: DefaultProps = { 
    label: 0,
    labelPlacement: LabelPlacement.END,
    checked: false,
    disabled: false,
  };

  render() {
    const { label, labelPlacement, onChange, checked, disabled, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
            <div className={styles.likeButton}>
              <IconToggle 
                {...styles('root', { checked, disabled }, rest)}
                icon={<Heart />}
                label={`${label}`}
                disabled={disabled}
                onChange={onChange}
                checked={checked}
                labelPlacement={labelPlacement} />
            </div>
        )}
      </TPAComponentsConsumer>
    );
  }
}
