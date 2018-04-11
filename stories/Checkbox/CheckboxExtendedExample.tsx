import * as React from 'react';
import {withStylable} from 'wix-ui-core/withStylable';
import {Checkbox, CheckboxProps} from '../../src/components/Checkbox';
import extendedStyles from './CheckboxExtendedExample.st.css';

export const CheckboxExtendedExample = withStylable<CheckboxProps>(Checkbox, extendedStyles, () => null);
