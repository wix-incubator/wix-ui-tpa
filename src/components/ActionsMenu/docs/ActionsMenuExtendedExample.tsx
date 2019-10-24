import * as React from 'react';
import { ActionsMenu } from '../ActionsMenu';
import styles from './ActionsMenuExtendedExample.st.css';

const onClick = () => console.log('clicked');
export const ActionsMenuExtendedExample: React.FC = props => {
  return (
    <ActionsMenu {...styles(styles.root, {}, props)}>
      <ActionsMenu.Item
        key={1}
        onClick={onClick}
        content="item 1"
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenu.Item
        key={2}
        onClick={onClick}
        content="item 2"
        subtitle="Subtitle"
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenu.Divider key={3} />
      <ActionsMenu.Item
        key={4}
        onClick={onClick}
        content="item 3"
        subtitle="Subtitle"
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenu.Item
        key={5}
        onClick={onClick}
        content="item 4"
        subtitle="Subtitle"
        disabled
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenu.Item key={6} onClick={onClick} content="item 5" />
    </ActionsMenu>
  );
};
