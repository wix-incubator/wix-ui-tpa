import * as React from 'react';
import { SocialBar } from '../';
import { Facebook } from '../../Icons/components/Facebook';
import { Tumblr } from '../../Icons/components/Tumblr';
import { Instagram } from '../../Icons/components/Instagram';
import { Linkedin } from '../../Icons/components/Linkedin';
import { Pinterest } from '../../Icons/components/Pinterest';
import { CopyUrlButton } from '../../CopyUrlButton';

export const SocialBarWiringExample = () => {
  return (
    <SocialBar>
      <SocialBar.Icon
        tooltip="Linkedin"
        icon={<Linkedin />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Facebook"
        icon={<Facebook />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Instagram"
        icon={<Instagram />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Pinterest"
        icon={<Pinterest />}
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />

      <SocialBar.Icon
        tooltip="Tumblr"
        icon={<Tumblr />}
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
