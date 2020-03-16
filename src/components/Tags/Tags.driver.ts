import {
  TagsListUniDriver,
  makeTagsListUniDriver,
} from 'wix-ui-core/dist/src/components/tags-list/TagsList.uni.driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { TAGS_DATA_HOOKS, TAGS_DATA_KEYS } from './dataHooks';

export interface TagsDriver extends TagsListUniDriver {
  clickTagAt(index: number): Promise<void>;
  isTagActiveAt(index: number): Promise<boolean>;
  getSkin(): Promise<string>;
  getAlignment(): Promise<string>;
  getSize(): Promise<string>;
}

const getTag: any = (base: UniDriver, index: number) =>
  base.$(`[data-hook="${TAGS_DATA_HOOKS.tag}-${index}"]`);

export const tagsDriverFactory = (base: UniDriver): TagsDriver => {
  return {
    ...makeTagsListUniDriver(base),
    clickTagAt: index =>
      getTag(base, index)
        .$([`[data-hook="${TAGS_DATA_HOOKS.tagInput}"]`])
        .click(),
    isTagActiveAt: index =>
      getTag(base, index).attr(TAGS_DATA_KEYS.tagIsChecked),
    getSkin: () => base.attr(TAGS_DATA_KEYS.skin),
    getAlignment: () => base.attr(TAGS_DATA_KEYS.alignment),
    getSize: () => base.attr(TAGS_DATA_KEYS.size),
  };
};
