import * as React from 'react';
import { Divider } from '../../Divider';
import { st, classes } from './ActionsMenuLayoutDivider.st.css';

const ActionsMenuLayoutDivider: React.FC = props => (
  <Divider className={st(classes.root)} {...props} />
);
ActionsMenuLayoutDivider.displayName = 'ActionsMenuLayout.Divider';

export { ActionsMenuLayoutDivider };
