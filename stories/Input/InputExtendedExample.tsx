import {withStylable} from 'wix-ui-core/dist/src';
import {TpaInput, TPAInputProps} from '../../src/components/Input';
import extendedStyles from './InputExtendedExample.st.css';

export const InputExtendedExample = withStylable<TPAInputProps>(TpaInput, extendedStyles, () => null);
