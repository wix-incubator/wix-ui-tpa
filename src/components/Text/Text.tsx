import * as React from 'react';
import style from './Text.st.css';

export interface TextProps {
  typography?: TYPOGRAPHY;
  tagName?: string;
}

export enum TYPOGRAPHY {
  smallTitle = 'smallTitle',
  runningText = 'runningText'
}

const CoreText = ({typography, tagName, children, ...rest}) =>
  React.createElement(
    tagName,
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
  tagName: 'span',
};

export const Text: React.SFC<TextProps> = CoreText;
