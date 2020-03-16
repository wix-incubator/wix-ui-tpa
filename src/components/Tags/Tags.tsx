import * as React from 'react';
import { ALIGNMENT, SIZE, SKIN } from './constants';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Tag as CoreTag, TagsList as CoreTagList } from 'wix-ui-core/tags-list';
import styles from './Tags.st.css';
import { TAGS_DATA_HOOKS, TAGS_DATA_KEYS } from './dataHooks';

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

  private getTagDataAttributes({ isActive, index }) {
    return {
      [TAGS_DATA_KEYS.tagIsChecked]: isActive,
      [TAGS_DATA_KEYS.index]: index,
    };
  }

  private getTagsListDataAttributes({ alignment, skin, size, rtl }) {
    return {
      [TAGS_DATA_KEYS.alignment]: alignment,
      [TAGS_DATA_KEYS.skin]: skin,
      [TAGS_DATA_KEYS.size]: size,
      [TAGS_DATA_KEYS.rtl]: rtl,
    };
  }

  generateTagItems() {
    const { items, onClick } = this.props;
    return items.map((item, index) => (
      <CoreTag
        key={item.value}
        checked={item.checked}
        onChange={() => onClick(item)}
        value={item.value}
        className={styles.tag}
        data-hook={`${TAGS_DATA_HOOKS.tag}-${index}`}
        {...this.getTagDataAttributes({
          isActive: item.checked,
          index,
        })}
        {...styles('tag', { selected: item.checked })}
      >
        {item.title}
      </CoreTag>
    ));
  }

  render() {
    const { alignment, size, skin, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ rtl }) => (
          <CoreTagList
            {...this.getTagsListDataAttributes({
              alignment,
              skin,
              size,
              rtl,
            })}
            {...styles(
              'root',
              {
                alignment,
                skin,
                size,
                rtl,
              },
              rest,
            )}
          >
            {this.generateTagItems()}
          </CoreTagList>
        )}
      </TPAComponentsConsumer>
    );
  }
}
