import * as React from 'react';
import { Divider } from '../../Divider';
import styles from './ActionsMenuLayoutDivider.st.css';

const ActionsMenuLayoutDivider: React.FC = props => (
  <Divider {...props} {...styles('root', {}, props)} />
);
ActionsMenuLayoutDivider.displayName = 'ActionsMenuLayout.Divider';

export { ActionsMenuLayoutDivider };
