import * as React from 'react';
import { Divider } from '../../Divider';
import styles from './Divider.st.css';

const ActionsMenuDivider: React.FC = props => (
  <Divider {...props} {...styles('root', {}, props)} />
);
ActionsMenuDivider.displayName = 'ActionsMenu.Divider';

export { ActionsMenuDivider };
