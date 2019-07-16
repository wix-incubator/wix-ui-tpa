import { AvatarSize } from "../Avatar";

export const importExample = `import { Avatar } from 'wix-ui-tpa/Avatar';`;

export const example = {
  [AvatarSize.xLarge]: getAvatars(AvatarSize.xLarge),
  [AvatarSize.large]: getAvatars(AvatarSize.large),
  [AvatarSize.medium]: getAvatars(AvatarSize.medium),
  [AvatarSize.small]: getAvatars(AvatarSize.small),
};

export const mobileExample = `
<TPAComponentsProvider value={{mobile: true}}>
  <Avatar />
</TPAComponentsProvider>
`;

function getAvatars(size) {
  return  `
  <>
    <Avatar size="${size}" src="https://randomuser.me/api/portraits/men/65.jpg"/>
    <Avatar size="${size}" />
    <Avatar size="${size}" name="Firstname Lastname"/>
  </>`;
}