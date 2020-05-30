import * as React from 'react';
import { Divider } from '../../Divider';
import { st, classes } from './ActionsMenuLayoutDivider.st.css';

const ActionsMenuLayoutDivider: React.FC = props => (
  <Divider {...props} className={st(classes.root)} />
);
ActionsMenuLayoutDivider.displayName = 'ActionsMenuLayout.Divider';

export { ActionsMenuLayoutDivider };
