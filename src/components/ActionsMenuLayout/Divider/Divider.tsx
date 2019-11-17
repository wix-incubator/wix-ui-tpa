import * as React from 'react';
import { Divider } from '../../Divider';
import styles from './Divider.st.css';

const ActionsMenuLayoutDivider: React.FC = props => (
  <Divider {...props} {...styles('root', {}, props)} />
);
ActionsMenuLayoutDivider.displayName = 'ActionsMenuLayout.Divider';

export { ActionsMenuLayoutDivider };
