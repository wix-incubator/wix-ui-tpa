import * as React from 'react';
import { ButtonProps } from '../Button';
import style from './IconButton.st.css';
import { ButtonNext } from 'wix-ui-core/button-next';

export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
}

interface DefaultProps {}

interface State {}

/** An implementation of an IconButton for TPAs, The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,By default the IconButton will pull the theme from the site (site colors), */
export class IconButton extends React.Component<IconButtonProps, State> {
  static displayName = 'IconButton';
  static defaultProps: DefaultProps = {};

  render() {
    const { icon, ...rest } = this.props;
    return (
      <ButtonNext
        aria-label={'icon button'}
        {...rest}
        {...style('root', {}, rest)}
      >
        <span className={style.icon}>{icon}</span>
      </ButtonNext>
    );
  }
}
