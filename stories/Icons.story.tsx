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
                    divider(),
                    title('General'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Anonymous />
                            </div>
                            <div>Anonymous - todo: check it out </div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Calendar />
                            </div>
                            <div>Calendar</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Camera />
                            </div>
                            <div>Camera</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Heart />
                            </div>
                            <div>Heart</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
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
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Check />
                            </div>
                            <div>Check</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <CheckSuccess />
                            </div>
                            <div>CheckSuccess</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Close />
                            </div>
                            <div>Close</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Minus />
                            </div>
                            <div>Minus</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <PlusS />
                            </div>
                            <div>Plus Small</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <Plus />
                            </div>
                            <div>Plus</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <PlusL />
                            </div>
                            <div>Plus Large</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <PlusXL />
                            </div>
                            <div>Plus XLarge</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
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
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
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
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <ArrowBottom />
                            </div>
                            <div>ArrowBottom</div>
                        </div>
                         <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <ArrowLeft />
                            </div>
                            <div>ArrowLeft</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <ArrowRight />
                            </div>
                            <div>ArrowRight</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <ArrowTop />
                            </div>
                            <div>ArrowTop</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <CaretDown />
                            </div>
                            <div>CaretDown</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                {/*<ChevronLeft />*/}
                            </div>
                            <div>ChevronLeft - todo: check it out</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                {/*<ChevronRight />*/}
                            </div>
                            <div>ChevronRight - todo: check it out</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                {/*<DoubleChevronLeft />*/}
                            </div>
                            <div>DoubleChevronLeft - todo: check it out</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                {/*<DoubleChevronRight />*/}
                            </div>
                            <div>DoubleChevronRight - todo: check it out</div>
                        </div>
                      </div>`}
                    ),
                    divider(),
                    title('Media'),
                    code({ title: '', source: `<div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr"}}>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
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
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.CopyLink />
                            </div>
                            <div>Copy Link</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Facebook />
                            </div>
                            <div>FB</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.GooglePodcast />
                            </div>
                            <div>Google Podcast</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Instagram />
                            </div>
                            <div>Instagram</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Linkedin />
                            </div>
                            <div>LinkedIn</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Pinterest />
                            </div>
                            <div>Pinterest</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Podcast />
                            </div>
                            <div>Podcast</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.GooglePodcast />
                            </div>
                            <div>Google Podcast</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Rss />
                            </div>
                            <div>RSS</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Soundcloud />
                            </div>
                            <div>SoundCloud</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Spotify />
                            </div>
                            <div>Spotify</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Stitcher />
                            </div>
                            <div>Stitcher</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Tumblr />
                            </div>
                            <div>Tumblr</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Twitter />
                            </div>
                            <div>Twitter</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Vimeo />
                            </div>
                            <div>Vimeo</div>
                        </div>
                        <div style={{display: "flex",flexDirection: "column", alignItems: "center", margin: "5px"}}>
                            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: " 125px", width: "125px", backgroundColor: "#F7F7F7"}}>
                                <SocialIcons.Youtube />
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