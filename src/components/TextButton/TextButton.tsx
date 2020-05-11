import * as React from 'react';
import { st, classes } from './TextButton.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';
import { TPAComponentProps } from '../../types';

export enum TEXT_BUTTON_PRIORITY {
  primary = 'primary',
  secondary = 'secondary',
  link = 'link',
}

export interface TextButtonProps extends ButtonNextProps, TPAComponentProps {
  priority?: TEXT_BUTTON_PRIORITY;
}

/** An implementation of link-like button */
export class TextButton extends React.Component<TextButtonProps> {
  static displayName = 'TextButton';
  static defaultProps: TextButtonProps = {
    priority: TEXT_BUTTON_PRIORITY.link,
  };

  render() {
    const { priority, className, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ButtonNext
            {...rest}
            className={st(classes.root, { priority, mobile }, className)}
          />
        )}
      </TPAComponentsConsumer>
    );
  }
}
