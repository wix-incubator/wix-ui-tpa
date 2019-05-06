import * as React from 'react';
import {Text, TextProps} from '../../src/components/Text';
import extendedStyles from './TextExtendedExample.st.css';

export const TextExtendedExample: React.FunctionComponent<TextProps> = (props) => <Text {...props} {...extendedStyles('root', {}, props)}/>;
