import * as React from 'react';
import style from './TextButton.st.css';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { ButtonNext } from 'wix-ui-core/button-next';
import { ButtonProps as ButtonNextProps } from 'wix-ui-core/dist/src/components/button-next/button-next';

export enum PRIORITY {
  primary = 'primary',
  secondary = 'secondary',
  link = 'link',
}

interface DefaultProps {
  priority: string;
}

export interface TextButtonProps extends ButtonNextProps {
  priority?: PRIORITY;
}

/** An implementation of link-like button */
export class TextButton extends React.Component<TextButtonProps> {
  static displayName = 'TextButton';
  static defaultProps: TextButtonProps = { priority: PRIORITY.link };

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
