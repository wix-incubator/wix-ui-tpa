// import * as React from 'react';
// import { visualize, story, snap } from 'storybook-snapper';
// import { AvatarGroup } from './';
// import { AvatarGroupSize } from './AvatarGroup';
//
// const IMG_SRC =
//   'https://static.wixstatic.com/media/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg/v1/fill/w_120,h_120/11062b_c09ec4aab8204a38addeb492a8cb8c3e~mv2_d_1670_2299_s_2.jpg';
//
// function generate3Items(onLoad) {
//   return [
//     {},
//     { name: 'anonymous' },
//     {
//       name: 'Eve',
//       src: IMG_SRC,
//       onLoad,
//     },
//   ];
// }
//
// visualize('AvatarGroup', () => {
//   Object.keys(AvatarGroupSize).forEach(avatarGroupSize => {
//     const size = AvatarGroupSize[avatarGroupSize];
//
//     story(`size: ${avatarGroupSize}`, () => {
//       snap('Empty', <AvatarGroup size={size} />);
//
//       snap('With 3 items and default limit', done => (
//         <AvatarGroup size={size} items={generate3Items(done)} />
//       ));
//
//       snap('With 6 items and default limit', done => {
//         return (
//           <AvatarGroup
//             size={size}
//             items={[...generate3Items(done), ...generate3Items(done)]}
//           />
//         );
//       });
//
//       snap('With 12 items and custom limit', done => {
//         let count = 0;
//
//         function onLoad() {
//           count += 1;
//
//           if (count === 3) {
//             done();
//           }
//         }
//
//         return (
//           <AvatarGroup
//             maxAmount={9}
//             size={size}
//             items={[
//               ...generate3Items(onLoad),
//               ...generate3Items(onLoad),
//               ...generate3Items(onLoad),
//               ...generate3Items(onLoad),
//             ]}
//           />
//         );
//       });
//
//       snap('With optional text link', done => (
//         <AvatarGroup size={size} items={generate3Items(done)}>
//           <AvatarGroup.TextButton>Click me</AvatarGroup.TextButton>
//         </AvatarGroup>
//       ));
//
//       snap('RTL', done => (
//         <div dir={'rtl'}>
//           <AvatarGroup size={size} items={generate3Items(done)}>
//             <AvatarGroup.TextButton>Click me</AvatarGroup.TextButton>
//           </AvatarGroup>
//         </div>
//       ));
//     });
//   });
// });
