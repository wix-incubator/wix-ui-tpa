import * as React from 'react';
import { SocialBar } from '../';
import { ReactComponent as Facebook } from '../../../assets/icons/Social/Facebook.svg';
import { ReactComponent as Instagram } from '../../../assets/icons/Social/Instagram.svg';
import { ReactComponent as Linkedin } from '../../../assets/icons/Social/Linkedin.svg';
import { ReactComponent as Tumblr } from '../../../assets/icons/Social/Tumblr.svg';
import { ReactComponent as Pinterest } from '../../../assets/icons/Social/Pinterest.svg';
import { CopyUrlButton } from '../../CopyUrlButton';

export const SocialBarWiringExample = () => {
  return (
    <SocialBar>
      <SocialBar.Icon
        tooltip="Facebook"
        icon={
          <Facebook href="https://www.facebook.com/sharer/sharer.php?u=wix.com" />
        }
      />

      <SocialBar.Icon
        tooltip="Instagram"
        icon={<Instagram />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Linkedin"
        icon={<Linkedin />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Tumblr"
        icon={<Tumblr />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Pinterest"
        icon={<Pinterest />}
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
