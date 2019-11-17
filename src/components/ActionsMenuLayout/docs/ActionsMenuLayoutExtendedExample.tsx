import * as React from 'react';
import { ActionsMenuLayout } from '../ActionsMenuLayout';
import styles from './ActionsMenuLayoutExtendedExample.st.css';

const onClick = () => console.log('clicked');
export const ActionsMenuLayoutExtendedExample: React.FC = props => {
  return (
    <ActionsMenuLayout {...styles(styles.root, {}, props)}>
      <ActionsMenuLayout.Item
        key={1}
        onClick={onClick}
        content="item 1"
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenuLayout.Item
        key={2}
        onClick={onClick}
        content="item 2"
        subtitle="Subtitle"
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenuLayout.Divider key={3} />
      <ActionsMenuLayout.Item
        key={4}
        onClick={onClick}
        content="item 3"
        subtitle="Subtitle"
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenuLayout.Item
        key={5}
        onClick={onClick}
        content="item 4"
        subtitle="Subtitle"
        disabled
        {...styles(styles.item, {}, props)}
      />
      <ActionsMenuLayout.Item key={6} onClick={onClick} content="item 5" />
    </ActionsMenuLayout>
  );
};
