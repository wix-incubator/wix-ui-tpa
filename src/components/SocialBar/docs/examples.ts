export const importExample = `import { SocialBar } from 'wix-ui-tpa/SocialBar';`;
const socialBar = `
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
`;

export const example = socialBar;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  ${socialBar}
</ExampleWithContextProps>
`;
