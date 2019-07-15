import { AvatarSize } from "../Avatar";

export const importExample = `import { Avatar } from 'wix-ui-tpa/Avatar';`;

export const example = `<>
${[AvatarSize.xLarge, AvatarSize.large, AvatarSize.medium, AvatarSize.small]
  .map(getAvatars).join('')}
</>`

getAvatars('medium');

export const mobileExample = `
<TPAComponentsProvider value={{mobile: true}}>
  <Avatar />
</TPAComponentsProvider>
`;

function getAvatars(size) {
  return  `
    <Avatar size="${size}" src="https://randomuser.me/api/portraits/men/65.jpg"/>
    <Avatar size="${size}" />
    <Avatar size="${size}" name="Firstname Lastname"/>`;
}