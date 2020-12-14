import * as React from 'react';
import { st, classes } from './Text.st.css';
import { DEFAULT_TAG_NAME, TYPOGRAPHY } from './constants';
import {
  TPAComponentsConsumer,
  TPAComponentsContext,
} from '../TPAComponentsConfig';
import { ThemeContextConsumer } from '../internal/ThemeContext/ThemeContext';
import { TPAComponentProps } from '../../types';

export interface TextProps extends TPAComponentProps {
  typography?: TYPOGRAPHY;
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
  };

  render() {
    const { typography, tagName, children, className, role, id } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) => (
          <ThemeContextConsumer>
            {({ theme }) =>
              React.createElement(
                tagName || DEFAULT_TAG_NAME,
                {
                  className: st(
                    classes.root,
                    {
                      typography,
                      mobile,
                      theme,
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
          </ThemeContextConsumer>
        )}
      </TPAComponentsConsumer>
    );
  }
}
