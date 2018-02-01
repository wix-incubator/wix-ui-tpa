import * as React from 'react';
import {withStylable} from 'wix-ui-core/dist/src';
import {TpaInput, TpaInputProps} from '../../src/components/Input';
import extendedStyles from './InputExtendedExample.st.css';

export const InputExtendedExample = withStylable<TpaInputProps>(TpaInput, extendedStyles, () => null);
