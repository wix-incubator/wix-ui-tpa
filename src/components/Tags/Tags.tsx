import * as React from 'react';
import { ALIGNMENT, SIZE, SKIN } from './constants';
import { TPAComponentsConsumer } from '../TPAComponentsConfig';
import { Tag as CoreTag, TagsList as CoreTagList } from 'wix-ui-core/tags-list';
import { st, classes } from './Tags.st.css';
import * as classNames from 'classnames';
import { TAGS_DATA_KEYS } from './dataHooks';
import { TPAComponentProps } from '../../types';

export interface TagItem {
  title: string;
  checked?: boolean;
  disabled?: boolean;
  value: string;
  link?: string;
  rel?: string;
}

export interface TagsProps extends TPAComponentProps {
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

  private getTagDataAttributes({ isChecked, index }) {
    return {
      [TAGS_DATA_KEYS.tagIsChecked]: isChecked,
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
        disabled={item.disabled}
        link={item.link}
        rel={item.rel}
        value={item.value}
        className={classNames(classes.tag, { [classes.checked]: item.checked })}
        {...this.getTagDataAttributes({
          isChecked: item.checked,
          index,
        })}
      >
        {item.title}
      </CoreTag>
    ));
  }

  render() {
    const { alignment, size, skin, className, ...rest } = this.props;
    return (
      <TPAComponentsConsumer>
        {({ rtl }) => (
          <CoreTagList
            data-hook={this.props['data-hook']}
            {...this.getTagsListDataAttributes({
              alignment,
              skin,
              size,
              rtl,
            })}
            className={st(
              classes.root,
              {
                alignment,
                skin,
                size,
                rtl,
              },
              className,
            )}
          >
            {this.generateTagItems()}
          </CoreTagList>
        )}
      </TPAComponentsConsumer>
    );
  }
}
