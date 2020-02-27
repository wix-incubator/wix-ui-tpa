import * as React from 'react';

import {
    header,
    divider,
    tab,
    tabs,
    title,
    code as baseCode
  } from 'wix-storybook-utils/Sections';


import { allComponents } from './utils/allComponents';

const code = config =>
  baseCode({ components: allComponents, compact: true, ...config });

export default {
  category: 'Icons',
  storyName: 'Icons',
  sections: [
    header(),
    tabs([
      tab({
        title: 'Icon Inventory',
        sections: [
          title('Arrows'),
          code({title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><Arrow_Left_Center/><div>Arrow-Left-Center</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_Left_Align_Left/></div><div>Arrow-Left-Left</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_Right_Center/></div><div>Arrow-Right-Center</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_Right_Align_Right/></div><div>Arrow-Right-Right</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_DoubleArrow_Left_Center/></div><div>Double Arrow-Left-Center</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_DoubleArrow_Right_Center/></div><div>Double Arrow-Right-Center</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_DoubleArrow_Left_Align_Left/></div><div>Double Arrow-Left-Left</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_DoubleArrow_Right_Align_Right/></div><div>Double Arrow-Right-Right</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_Up/></div><div>Arrow-Up</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Arrow_Down/></div><div>Arrow-Down</div></div>
          </div>`}),
          divider(),
          title('Socials'),
          code({title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><CopyLink/></div><div>Copy Link</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Facebook/></div><div>Facebook</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><GooglePodcast/></div><div>Google Podcast</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Instagram/></div><div>Instagram</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Linkedin/></div><div>Linkedin</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Pinterest/></div><div>Pinterest</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Podcast/></div><div>Podcast</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Rss/></div><div>Rss</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Soundcloud/></div><div>Soundcloud</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Spotify/></div><div>Spotify</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Stitcher/></div><div>Stitcher</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Tumblr/></div><div>Tumblr</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Twitter/></div><div>Twitter</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Vimeo/></div><div>Vimeo</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Youtube/></div><div>Youtube</div></div>
          </div>`}),
          divider(),
          title('General'),
          code({title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Anonymous/></div><div>Anonymous</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Calendar/></div><div>Calendar</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Check/></div><div>Check</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><CheckSuccess/></div><div>Check-Success</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Close_L/></div><div>Close_L</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Close_S/></div><div>Close_S</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Delete/></div><div>Delete</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><DeleteItem/></div><div>DeleteItem</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Download/></div><div>Download</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Ellipses/></div><div>Ellipses</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Error/></div><div>Error</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Heart/></div><div>Heart</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Info/></div><div>Info</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Minus_L/></div><div>Minus_L</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Minus_S/></div><div>Minus_S</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Minus_XS/></div><div>Minus_XS</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Plus_L/></div><div>Plus_L</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Plus_S/></div><div>Plus_S</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Plus_XS/></div><div>Plus_XS</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Search/></div><div>Search</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Share/></div><div>Share</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><SortDown/></div><div>Sort-Down</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><SortGeneral/></div><div>Sort-General</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><SortUp/></div><div>Sort-Up</div></div>
          <div style={{display: "flex",flexDirection: "column",margin: "5px"}}><div><Star/></div><div>Star</div></div>
          </div>`}),
        ],
      }),
    ]),
  ],
  /*{}
Socials: () => <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>Hello Button</div>,

General: () => <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>Hello Button</div>,*/
};