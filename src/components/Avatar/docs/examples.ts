import { AvatarSize } from '../Avatar';

export const importExample = `import { Avatar } from 'wix-ui-tpa/Avatar';`;

export const example = Object.keys(AvatarSize).reduce((acc, size) => {
  return {
    ...acc,
    [size]: getAvatars(size),
  };
}, {});

function getAvatars(size) {
  return `
  <div>
    <Avatar size="${size}" src="https://randomuser.me/api/portraits/men/65.jpg"/>
    <Avatar size="${size}" />
    <Avatar size="${size}" name="Firstname Lastname"/>
  </div>`;
}
