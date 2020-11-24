import * as React from 'react';

import {
    description,
    importExample,
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
                    description({
                        title: 'Importing the icons',
                        text: [
                            'We are using the ',
                            <a href="https://www.npmjs.com/package/@svgr/webpack" >
                                svgr plugin
                            </a>,
                            ' for svg imports which allow you to import the svg file directly. ',
                            'If you have ',
                            <a href="https://webpack.js.org/guides/tree-shaking/" >
                                Tree Shaking
                            </a>,
                            ' in your application use the first option otherwise use the second option.'
                        ],
                    }),


                    importExample(
                        `import { Icons } from 'wix-ui-tpa';
                        ...
                        render() {
                          ...
                          return (
                            ...  
                            <Icons.Calendar />,
                            ...
                          );
                        }`
                    ),

                    importExample(
                        `import { ReactComponent as Calendar } from 'wix-ui-tpa/dist/src/assets/icons/Calendar.svg';
                        ...
                        render() {
                          ...
                          return (
                            ...  
                            <Calendar />,
                            ...
                          );
                        }`
                    ),

                    divider(),
                    title('General'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Anonymous />
                            </div>
                            <div>Anonymous</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Calendar />
                            </div>
                            <div>Calendar</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Camera />
                            </div>
                            <div>Camera</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Heart />
                            </div>
                            <div>Heart</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Star />
                            </div>
                            <div>Star</div>
                        </div>
                      </div>`}
                    ),
                    divider(),
                    title('Actions'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Check />
                            </div>
                            <div>Check</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <CheckSuccess />
                            </div>
                            <div>CheckSuccess</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Close />
                            </div>
                            <div>Close</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Minus />
                            </div>
                            <div>Minus</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <PlusS />
                            </div>
                            <div>Plus Small</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Plus />
                            </div>
                            <div>Plus</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <PlusL />
                            </div>
                            <div>Plus Large</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <PlusXL />
                            </div>
                            <div>Plus XLarge</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Share />
                            </div>
                            <div>Share</div>
                        </div>
                      </div>`}
                    ),
                    divider(),
                    title('Notifications'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Error />
                            </div>
                            <div>Error</div>
                        </div>
                      </div>`}
                    ),
                    divider(),
                    title('Arrows'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <ArrowBottom />
                            </div>
                            <div>ArrowBottom</div>
                        </div>
                         <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <ArrowLeft />
                            </div>
                            <div>ArrowLeft</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <ArrowRight />
                            </div>
                            <div>ArrowRight</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <ArrowTop />
                            </div>
                            <div>ArrowTop</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <CaretDown />
                            </div>
                            <div>CaretDown</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <ChevronLeft />
                            </div>
                            <div>ChevronLeft</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <ChevronRight />
                            </div>
                            <div>ChevronRight</div>
                        </div>
                      </div>`}
                    ),
                    divider(),
                    title('Media'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <SocialIcons.CopyLink />
                            </div>
                            <div>Copy Link</div>
                        </div>
                      </div>`}
                    ),
                    divider(),
                    title('Socials'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <CopyLink />
                            </div>
                            <div>Copy Link</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Facebook />
                            </div>
                            <div>FB</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <GooglePodcast />
                            </div>
                            <div>Google Podcast</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Instagram />
                            </div>
                            <div>Instagram</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Linkedin />
                            </div>
                            <div>LinkedIn</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Pinterest />
                            </div>
                            <div>Pinterest</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Podcast />
                            </div>
                            <div>Podcast</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <GooglePodcast />
                            </div>
                            <div>Google Podcast</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Rss />
                            </div>
                            <div>RSS</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Soundcloud />
                            </div>
                            <div>SoundCloud</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Spotify />
                            </div>
                            <div>Spotify</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Stitcher />
                            </div>
                            <div>Stitcher</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Tumblr />
                            </div>
                            <div>Tumblr</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Twitter />
                            </div>
                            <div>Twitter</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Vimeo />
                            </div>
                            <div>Vimeo</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#e6e6e6"}}>
                                <Youtube />
                            </div>
                            <div>Youtube</div>
                        </div>
                      </div>`}
                    ),
                    divider(),
                ],
            }),
        ]),
    ],
};
