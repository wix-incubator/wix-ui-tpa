import * as React from 'react';
import { SocialBar } from '../';
import styles from './SocialBarWiringExample.st.css';
import { IconButton } from '../../IconButton';
import { Share, SocialIcons } from '../../../assets/icons';
import { CopyUrlButton } from '../../CopyUrlButton';

export const SocialBarWiringExample = () => {
  return (
    <SocialBar theme="light">
      <SocialBar.Icon tooltip="Facebook">
        <IconButton
          icon={<SocialIcons.Facebook />}
          as="a"
          href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
        />
      </SocialBar.Icon>
      <SocialBar.Icon tooltip="Instagram">
        <IconButton
          icon={<SocialIcons.Instagram />}
          as="a"
          href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
        />
      </SocialBar.Icon>
      <SocialBar.Icon tooltip="Linkedin">
        <IconButton
          icon={<SocialIcons.Linkedin />}
          as="a"
          href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
        />
      </SocialBar.Icon>
      <SocialBar.Icon tooltip="Tumblr">
        <IconButton
          icon={<SocialIcons.Tumblr />}
          as="a"
          href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
        />
      </SocialBar.Icon>
      <SocialBar.Icon tooltip="Pinterest">
        <IconButton
          icon={<SocialIcons.Pinterest />}
          as="a"
          href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
        />
      </SocialBar.Icon>
      <SocialBar.Icon>
        <CopyUrlButton
          tooltipText="Copy Link"
          successText="Link Copied"
          url="https://google.com"
        />
      </SocialBar.Icon>
    </SocialBar>
  );
};
