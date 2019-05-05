import * as React from 'react';
import style from './Text.st.css';
import { DEFAULT_TAG_NAME, TYPOGRAPHY } from './constants';
import { WixUiTpaConfigProps, withWixUiTpaConfig } from '../WixUiTpaConfig';

export interface TextProps extends WixUiTpaConfigProps {
  typography?: TYPOGRAPHY;
  tagName?: string;
}

const Text = withWixUiTpaConfig<TextProps>(({
  typography,
  tagName,
  children,
  mobile,
  ...rest
}) =>
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
  ));

Text.displayName = 'Text';

Text.defaultProps = {
  typography: TYPOGRAPHY.runningText,
  tagName: DEFAULT_TAG_NAME,
};

export { Text };
