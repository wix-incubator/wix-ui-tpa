import {
  TagsListUniDriver,
  makeTagsListUniDriver,
} from 'wix-ui-core/dist/src/components/tags-list/TagsList.uni.driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';
import { TAGS_DATA_KEYS } from './dataHooks';

export interface TagsDriver extends TagsListUniDriver {
  getSkin(): Promise<string>;
  getAlignment(): Promise<string>;
  getSize(): Promise<string>;
}

export const tagsDriverFactory = (base: UniDriver): TagsDriver => {
  const tagsListUniDriver = makeTagsListUniDriver(base);
  return {
    ...tagsListUniDriver,
    getSkin: () => base.attr(TAGS_DATA_KEYS.skin),
    getAlignment: () => base.attr(TAGS_DATA_KEYS.alignment),
    getSize: () => base.attr(TAGS_DATA_KEYS.size),
  };
};
