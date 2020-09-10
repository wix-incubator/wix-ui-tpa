import * as React from 'react';
import { st, classes } from './Text.st.css';
import { DEFAULT_TAG_NAME, TYPOGRAPHY } from './constants';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';

export interface TextProps extends TPAComponentProps {
  typography?: TYPOGRAPHY;
  tagName?: string;
  className?: string;
  role?: string;
}

export class Text extends React.Component<TextProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Text';
  static defaultProps = {
    typography: TYPOGRAPHY.runningText,
  };

  render() {
    const { typography, tagName, children, className, role } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) =>
          React.createElement(
            tagName || DEFAULT_TAG_NAME,
            {
              className: st(
                classes.root,
                {
                  typography,
                  mobile,
                },
                className,
              ),
              'data-hook': this.props['data-hook'],
              role,
            },
            children,
          )
        }
      </TPAComponentsConsumer>
    );
  }
}
