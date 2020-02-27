export const importExample = `import { SocialBar } from 'wix-ui-tpa/SocialBar';`;
const socialBar = `
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
`;

export const example = socialBar;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  ${socialBar}
</ExampleWithContextProps>
`;
