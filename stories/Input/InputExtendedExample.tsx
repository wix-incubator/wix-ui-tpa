import * as React from 'react';
import {withStylable} from 'wix-ui-core/withStylable';
import {InputBase, InputProps} from '../../src/components/Input';
import extendedStyles from './InputExtendedExample.st.css';

export const InputExtendedExample = withStylable<InputProps>(InputBase, extendedStyles, () => null);
