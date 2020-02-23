import * as React from 'react';
import {ALIGNMENT, SIZE, SKIN} from './constants';
import {TPAComponentsConsumer} from '../TPAComponentsConfig';
import {Tag as CoreTag, TagsList as CoreTagList} from 'wix-ui-core/tags-list';
import styles from './Tags.st.css';

interface TagItem {
  title: string;
  checked?: boolean;
  value: string;
}

export interface TagsProps {
  items: TagItem[];
  onClick(item: TagItem): void;
  size?: SIZE;
  alignment?: ALIGNMENT;
  skin?: SKIN;
}

interface DefaultProps {
  alignment: ALIGNMENT;
  size?: SIZE;
  skin: SKIN;
}

/** A Selector Component */
export class Tags extends React.Component<TagsProps> {
  static displayName = 'Tags';
  static defaultProps: DefaultProps = {
    alignment: ALIGNMENT.center,
    size: SIZE.medium,
    skin: SKIN.solid,
  };

  generateTagItems() {
    const {items, onClick} = this.props;
    return items.map((item) => (
      <CoreTag key={item.value}
               checked={item.checked}
               onChange={() => onClick(item)}
               value={item.value}
               className={styles.tag}
               {...styles('tag', {selected: item.checked})}>
        {item.title}
      </CoreTag>
    ));
  }

  render() {
    const {alignment, size, skin, ...rest} = this.props;
    return (
      <TPAComponentsConsumer>
        {({ rtl }) => (
          <CoreTagList {...styles(
            'root',
            {
              alignment,
              skin,
              size,
              rtl,
            },
            rest,
          )}>
            {this.generateTagItems()}
          </CoreTagList>
        )}
      </TPAComponentsConsumer>
    );
  }
}
