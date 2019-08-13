import * as React from 'react';
import { Divider } from '../../Divider';
import dividerStylesExt from './Divider.st.css';

const ActionsMenuDivider: React.FC = props => (
  <Divider {...props} {...dividerStylesExt('root', {}, props)} />
);
ActionsMenuDivider.displayName = 'ActionsMenu.Divider';

export { ActionsMenuDivider };
