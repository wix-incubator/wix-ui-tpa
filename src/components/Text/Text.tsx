import * as React from 'react';
import { st, classes } from './Text.st.css';
import { DEFAULT_TAG_NAME, TYPOGRAPHY, TEXT_PRIORITY } from './constants';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import { TPAComponentProps } from '../../types';

export interface TextProps extends TPAComponentProps {
  /**
   * Set typography preset to be used
   */
  typography?: TYPOGRAPHY;
  /**
   * Set text priority
   */
  priority?: TEXT_PRIORITY;
  /**
   * Define what tag will be rendered
   */
  tagName?: string;
  className?: string;
  role?: string;
  id?: string;
}

export class Text extends React.Component<TextProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Text';
  static defaultProps = {
    typography: TYPOGRAPHY.runningText,
    priority: TEXT_PRIORITY.primary,
  };

  render() {
    const {
      typography,
      priority,
      tagName,
      children,
      className,
      role,
      id,
    } = this.props;

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
                  priority,
                  mobile,
                },
                className,
              ),
              'data-hook': this.props['data-hook'],
              role,
              id,
            },
            children,
          )
        }
      </TPAComponentsConsumer>
    );
  }
}
