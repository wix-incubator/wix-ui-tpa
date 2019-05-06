import * as React from 'react';
import { {%ComponentName%}, {%ComponentName%}Props } from '../../src/components/{%ComponentName%}';
import extendedStyles from './{%ComponentName%}ExtendedExample.st.css';

export const {%ComponentName%}ExtendedExample: React.FunctionComponent<{%ComponentName%}Props> = 
  (props) => <{%ComponentName%} {...props} {...extendedStyles('root', {}, props)}/>;
