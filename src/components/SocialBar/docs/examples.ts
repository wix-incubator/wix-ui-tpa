export const importExample = `import { SocialBar } from 'wix-ui-tpa/SocialBar';`;
const socialBar = `
  <SocialBar>
    <SocialBar.Icon tooltip='Facebook'>
      <IconButton
        icon={<Share/>}
        as="a"
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />
    </SocialBar.Icon>
    <SocialBar.Icon tooltip='Twitter'>
      <IconButton
        icon={<Share/>}
        as="a"
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />
    </SocialBar.Icon>
    <SocialBar.Icon tooltip='Instagram'>
      <IconButton
        icon={<Share/>}
        as="a"
        href="https://www.facebook.com/sharer/sharer.php?u=wix.com"
      />
    </SocialBar.Icon>
    <SocialBar.Icon>
      <CopyUrlButton
        tooltipText='Copy Link'
        successText="Link Copied"
        url="https://google.com"
      />
    </SocialBar.Icon>
  </SocialBar>
`;

export const example = socialBar;

export const mobileExample = `
<ExampleWithContextProps mobile={true}>
  ${socialBar}
</ExampleWithContextProps>
`;
