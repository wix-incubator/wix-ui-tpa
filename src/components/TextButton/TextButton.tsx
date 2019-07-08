import * as React from 'react';
import style from './TextButton.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';

export enum TEXT_BUTTON_PRIORITY {
  primary = 'primary',
  secondary = 'secondary',
  link = 'link',
}

export interface TextButtonProps extends ButtonNextProps {
  priority?: TEXT_BUTTON_PRIORITY;
}

/** An implementation of link-like button */
export class TextButton extends React.Component<TextButtonProps> {
  static displayName = 'TextButton';
  static defaultProps: TextButtonProps = {
    priority: TEXT_BUTTON_PRIORITY.link,
  };

  render() {
    const { priority, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ButtonNext
            {...rest}
            {...style('root', { priority, mobile }, rest)}
          />
        )}
      </TPAComponentsConsumer>
    );
  }
}
