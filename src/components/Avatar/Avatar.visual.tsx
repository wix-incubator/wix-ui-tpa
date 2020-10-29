// import * as React from 'react';
// import { visualize, story, snap } from 'storybook-snapper';
// import { Avatar } from './';
// import { AvatarSize } from './Avatar';
//
// const IMG_SRC =
//   'https://static.wixstatic.com/media/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg/v1/fill/w_120,h_120/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg';
//
// visualize('Avatar', () => {
//   Object.keys(AvatarSize).forEach(avatarSize => {
//     story(`size: ${avatarSize}`, () => {
//       const size = AvatarSize[avatarSize];
//
//       snap('Anonymous', <Avatar size={size} />);
//       snap(
//         'Without image',
//         <Avatar size={AvatarSize[avatarSize]} name={'Peter'} />,
//       );
//       snap('With image', done => (
//         <Avatar size={size} name={'Eve'} src={IMG_SRC} onLoad={done} />
//       ));
//     });
//   });
// });
