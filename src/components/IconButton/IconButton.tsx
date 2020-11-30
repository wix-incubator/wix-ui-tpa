import * as React from 'react';
import { ButtonProps } from '../Button';
import { st, classes } from './IconButton.st.css';
import { ButtonNext } from 'wix-ui-core/button-next';
import { TPAComponentProps } from '../../types';

export interface IconButtonProps extends ButtonProps, TPAComponentProps {
  icon: React.ReactNode;
  skin: Skins;
}

export enum Skins {
  Line = 'line',
  Full = 'full',
}

interface DefaultProps {
  skin: Skins;
}

interface State {}

/** An implementation of an IconButton for TPAs,
 * The TPA implementation provides few extendable theme properties with the ability to override the base properties as well.
 * By default the IconButton will pull the theme from the site (site color scheme) */
export class IconButton extends React.Component<IconButtonProps, State> {
  static displayName = 'IconButton';
  static defaultProps: DefaultProps = { skin: Skins.Line };

  render() {
    const { icon, disabled, skin, className, innerRef, ...rest } = this.props;
    return (
      <ButtonNext
        className={st(
          classes.root,
          { disabled, skin },
          classes[`skin-${skin}`],
          className,
        )}
        {...rest}
        ref={innerRef}
      >
        <span className={classes.icon}>{icon}</span>
      </ButtonNext>
    );
  }
}
