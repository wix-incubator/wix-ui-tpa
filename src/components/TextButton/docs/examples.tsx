import * as React from 'react';
import * as ExtendedRawSource from '!raw-loader!./TextButtonWithStylesExample.tsx';
import * as ExtendedMobileRawSource from '!raw-loader!./TextButtonWithStylesMobileExample.tsx';
import * as ExtendedCSSRaw from '!raw-loader!./TextButtonWithStylesExample.st.css';
import { MockSettings } from '../../../../stories/helperComponents/MockSettings';
import CodeExample from 'wix-storybook-utils/CodeExample';
import { TextButtonWithStylesExample } from './TextButtonWithStylesExample';
import { TextButtonWithStylesMobileExample } from './TextButtonWithStylesMobileExample';

export const importExample = `import { TextButton } from 'wix-ui-tpa/TextButton';`;

export const basic = `<TextButton>Text Button</TextButton>`;
