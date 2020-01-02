import * as React from 'react';
import { SocialBar } from '../';
import { SocialIcons } from '../../../assets/icons';
import { CopyUrlButton } from '../../CopyUrlButton';

export const SocialBarWiringExample = () => {
  return (
    <SocialBar>
      <SocialBar.Icon
        tooltip="Facebook"
        icon={
          <SocialIcons.Facebook href="https://www.facebook.com/sharer/sharer.php?u=wix.com" />
        }
      />

      <SocialBar.Icon
        tooltip="Instagram"
        icon={<SocialIcons.Instagram />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Linkedin"
        icon={<SocialIcons.Linkedin />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Tumblr"
        icon={<SocialIcons.Tumblr />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Pinterest"
        icon={<SocialIcons.Pinterest />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <CopyUrlButton
        tooltipText="Copy Link"
        successText="Link Copied"
        url="https://google.com"
      />
    </SocialBar>
  );
};
