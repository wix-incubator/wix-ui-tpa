import * as React from 'react';
import style from './Text.st.css';
import {DEFAULT_TAG_NAME, TYPOGRAPHY} from './constants';

export interface TextProps {
  typography?: TYPOGRAPHY;
  tagName?: string;
}

const CoreText = ({typography, tagName, children, ...rest}) =>
  React.createElement(
    tagName || DEFAULT_TAG_NAME,
    {
      ...style(
        'root',
        {
          typography
        },
        rest
      ),
    },
    (<span data-hook="style-override-wrapper" className={style.overrideStyle}>{children}</span>),
  );

CoreText.defaultProps = {
  typography: TYPOGRAPHY.runningText,
  tagName: DEFAULT_TAG_NAME,
};

export const Text: React.SFC<TextProps> = CoreText;
