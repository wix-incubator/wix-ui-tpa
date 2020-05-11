import * as React from 'react';
import { ActionsMenuLayout } from '../ActionsMenuLayout';
import { st, classes } from './ActionsMenuLayoutExtendedExample.st.css';

const onClick = () => console.log('clicked');
export const ActionsMenuLayoutExtendedExample: React.FC = () => {
  return (
    <ActionsMenuLayout className={st(classes.root)}>
      <ActionsMenuLayout.Item
        key={1}
        onClick={onClick}
        content="item 1"
        className={classes.item}
      />
      <ActionsMenuLayout.Item
        key={2}
        onClick={onClick}
        content="item 2"
        subtitle="Subtitle"
        className={st(classes.item)}
      />
      <ActionsMenuLayout.Divider key={3} />
      <ActionsMenuLayout.Item
        key={4}
        onClick={onClick}
        content="item 3"
        subtitle="Subtitle"
        className={st(classes.item)}
      />
      <ActionsMenuLayout.Item
        key={5}
        onClick={onClick}
        content="item 4"
        subtitle="Subtitle"
        disabled
        className={st(classes.item)}
      />
      <ActionsMenuLayout.Item key={6} onClick={onClick} content="item 5" />
    </ActionsMenuLayout>
  );
};
