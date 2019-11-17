import * as React from 'react';
import style from './Text.st.css';
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
}

export class Text extends React.Component<TextProps> {
  static contextType = TPAComponentsContext;
  static displayName = 'Text';
  static defaultProps = {
    typography: TYPOGRAPHY.runningText,
  };

  render() {
    const { typography, tagName, children, ...rest } = this.props;

    return (
      <TPAComponentsConsumer>
        {({ mobile }) =>
          React.createElement(
            tagName || DEFAULT_TAG_NAME,
            {
              ...style(
                'root',
                {
                  typography,
                  mobile,
                },
                rest,
              ),
            },
            children,
          )
        }
      </TPAComponentsConsumer>
    );
  }
}
