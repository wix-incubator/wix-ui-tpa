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
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_Left_Center/></div><div>Arrow-Left-Center</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_Left_Align_Left/></div><div>Arrow-Left-Left</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_Right_Center/></div><div>Arrow-Right-Center</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_Right_Align_Right/></div><div>Arrow-Right-Right</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_DoubleArrow_Left_Center/></div><div>Double Arrow-Left-Center</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_DoubleArrow_Right_Center/></div><div>Double Arrow-Right-Center</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_DoubleArrow_Left_Align_Left/></div><div>Double Arrow-Left-Left</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_DoubleArrow_Right_Align_Right/></div><div>Double Arrow-Right-Right</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_Up/></div><div>Arrow-Up</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Arrow_Down/></div><div>Arrow-Down</div></div>
          </div>`}),
          divider(),
          title('Socials'),
          code({title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><CopyLink/></div><div>Copy Link</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Facebook/></div><div>Facebook</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><GooglePodcast/></div><div>Google Podcast</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Instagram/></div><div>Instagram</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Linkedin/></div><div>Linkedin</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Pinterest/></div><div>Pinterest</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Podcast/></div><div>Podcast</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Rss/></div><div>Rss</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Soundcloud/></div><div>Soundcloud</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Spotify/></div><div>Spotify</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Stitcher/></div><div>Stitcher</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Tumblr/></div><div>Tumblr</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Twitter/></div><div>Twitter</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Vimeo/></div><div>Vimeo</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Youtube/></div><div>Youtube</div></div>
          </div>`}),
          divider(),
          title('General'),
          code({title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Anonymous/></div><div>Anonymous</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Calendar/></div><div>Calendar</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Check/></div><div>Check</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><CheckSuccess/></div><div>Check-Success</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Close_L/></div><div>Close_L</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Close_S/></div><div>Close_S</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Delete/></div><div>Delete</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><DeleteItem/></div><div>DeleteItem</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Download/></div><div>Download</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Ellipses/></div><div>Ellipses</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Error/></div><div>Error</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Heart/></div><div>Heart</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Info/></div><div>Info</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Minus_L/></div><div>Minus_L</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Minus_S/></div><div>Minus_S</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Minus_XS/></div><div>Minus_XS</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Plus_L/></div><div>Plus_L</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Plus_S/></div><div>Plus_S</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Plus_XS/></div><div>Plus_XS</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Search/></div><div>Search</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Share/></div><div>Share</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><SortDown/></div><div>Sort-Down</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><SortGeneral/></div><div>Sort-General</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><SortUp/></div><div>Sort-Up</div></div>
          <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}><div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}><Star/></div><div>Star</div></div>
          </div>`}),
        ],
      }),
    ]),
  ],
  /*<div style={{height: "125px", width: "125px"}}>*/
};