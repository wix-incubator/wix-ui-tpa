import * as React from 'react';
import {ToggleSwitch as CoreToggleSwitch, ToggleSwitchProps} from 'wix-ui-core/ToggleSwitch';
import toggleSwitchStyles from './ToggleSwitch.st.css';
import {withStylable} from 'wix-ui-core/withStylable';

export const ToggleSwitch = withStylable<ToggleSwitchProps>(CoreToggleSwitch, toggleSwitchStyles, () => null);
