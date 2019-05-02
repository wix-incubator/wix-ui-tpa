import * as React from 'react';
import style from './Text.st.css';
import { DEFAULT_TAG_NAME, TYPOGRAPHY } from './constants';

export interface TextProps {
  typography?: TYPOGRAPHY;
  tagName?: string;
  isMobile?: boolean;
}

const CoreText: React.FunctionComponent<TextProps> = ({
  typography,
  tagName,
  isMobile,
  children,
  ...rest
}) =>
  React.createElement(
    tagName || DEFAULT_TAG_NAME,
    {
      ...style(
        'root',
        {
          typography,
          mobile: isMobile,
        },
        rest,
      ),
    },
    children,
  );

CoreText.displayName = 'Text';

CoreText.defaultProps = {
  typography: TYPOGRAPHY.runningText,
  tagName: DEFAULT_TAG_NAME,
  isMobile: false,
};

export const Text: React.FunctionComponent<TextProps> = CoreText;
