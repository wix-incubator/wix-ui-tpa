import * as React from 'react';
import style from './Text.st.css';

export interface TextProps {
  typography?: TYPOGRAPHY;
}

export enum TYPOGRAPHY {
  smallTitle = 'smallTitle',
  runningText = 'runningText'
}

function getTagNameByTypography(typography: string) {
  if (typography === TYPOGRAPHY.smallTitle) {
    return 'h5';
  } else {
    return 'p';
  }
}

const CoreText = ({typography, children, ...rest}) => {
  const tagName = getTagNameByTypography(typography);

  return React.createElement(
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
};

CoreText.defaultProps = {
  typography: TYPOGRAPHY.runningText,
};

export const Text: React.SFC<TextProps> = CoreText;
