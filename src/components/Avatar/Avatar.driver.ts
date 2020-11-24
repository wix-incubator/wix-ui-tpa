import {
  AvatarDriver as CoreAvatarDriver,
  avatarDriverFactory as coreAvatarDriverFactory,
} from 'wix-ui-core/dist/src/components/avatar/avatar.uni.driver';
import { UniDriver } from 'wix-ui-test-utils/unidriver';

export interface AvatarDriver extends CoreAvatarDriver {
  src(): Promise<string>;
}

export const avatarDriverFactory = (base: UniDriver): AvatarDriver => {
  return {
    ...coreAvatarDriverFactory(base),

    /**
     * Gets the src
     * @return {Promise<string>}
     */
    src: async () => {
      let src = '';

      try {
        src = await base.$('img').attr('src');
      } catch (e) {}

      return src;
    },
  };
};
