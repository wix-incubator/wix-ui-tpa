import * as React from 'react';
import {withStylable} from 'wix-ui-core/withStylable';
import {Input, InputProps} from '../../src/components/Input';
import extendedStyles from './InputExtendedExample.st.css';

export const InputExtendedExample = withStylable<InputProps>(Input, extendedStyles, () => null);
