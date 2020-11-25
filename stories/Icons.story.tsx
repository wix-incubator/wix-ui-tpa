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
                            'The library provides the recommended icons for your applications, provided as raw SVG files. Make sure that your build tool knows how to handle it',
                        ],
                    }),

                    title('General'),
                    code({ title: '', source: `
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 80px 80px 80px 80px 80px',
                            alignContent: 'center',
                            gridGap: '12px',
                          }}
                        >
                            {[
                                { name: 'Anonymous', icon: <Anonymous /> },
                                { name: 'Calendar', icon: <Calendar /> },
                                { name: 'Camera', icon: <Camera /> },
                                { name: 'Heart', icon: <Heart /> },
                                { name: 'Star', icon: <Star /> },
                              ].map(item => (
                                <div key={item.name}>
                                  <div
                                    style={{
                                      display: 'grid',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: '80px',
                                      width: '80px',
                                      backgroundColor: '#e6e6e6',
                                    }}
                                  >
                                    {item.icon}
                                  </div>
                                  <div style={{ textAlign: 'center' }}>{item.name}</div>
                                </div>
                              ))}
                        </div>
                    `}),
                    divider(),
                    title('Actions'),
                    code({ title: '', source: `
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 80px 80px 80px 80px 80px',
                            alignContent: 'center',
                            gridGap: '12px',
                          }}
                        >
                            {[
                                { name: 'Check', icon: <Check /> },
                                { name: 'Check Success', icon: <CheckSuccess /> },
                                { name: 'Close', icon: <Close /> },
                                { name: 'Minus', icon: <Minus /> },
                                { name: 'Plus Small', icon: <PlusS /> },
                                { name: 'Plus', icon: <Plus /> },
                                { name: 'Plus Large', icon: <PlusL /> },
                                { name: 'Plus XLarge', icon: <PlusXL /> },
                                { name: 'Share', icon: <Share /> },
                              ].map(item => (
                                <div key={item.name}>
                                  <div
                                    style={{
                                      display: 'grid',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: '80px',
                                      width: '80px',
                                      backgroundColor: '#e6e6e6',
                                    }}
                                  >
                                    {item.icon}
                                  </div>
                                  <div style={{ textAlign: 'center' }}>{item.name}</div>
                                </div>
                              ))}
                        </div>
                    `}),
                    divider(),
                    title('Notifications'),
                    code({ title: '', source: `
                         <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 80px 80px 80px 80px 80px',
                            alignContent: 'center',
                            gridGap: '12px',
                          }}
                        >
                            {[
                                { name: 'Error', icon: <Error /> },
                              ].map(item => (
                                <div key={item.name}>
                                  <div
                                    style={{
                                      display: 'grid',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: '80px',
                                      width: '80px',
                                      backgroundColor: '#e6e6e6',
                                    }}
                                  >
                                    {item.icon}
                                  </div>
                                  <div style={{ textAlign: 'center' }}>{item.name}</div>
                                </div>
                              ))}
                        </div>
                    `}),
                    divider(),
                    title('Arrows'),
                    code({ title: '', source: `
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 80px 80px 80px 80px 80px',
                            alignContent: 'center',
                            gridGap: '12px',
                          }}
                        >
                            {[
                                { name: 'Arrow Bottom', icon: <ArrowBottom /> },
                                { name: 'Arrow Left', icon: <ArrowLeft /> },
                                { name: 'Arrow Right', icon: <ArrowRight /> },
                                { name: 'Arrow Top', icon: <ArrowTop /> },
                                { name: 'Caret Down', icon: <CaretDown /> },
                                { name: 'Chevron Left', icon: <ChevronLeft /> },
                                { name: 'Chevron Right', icon: <ChevronRight /> },
                              ].map(item => (
                                <div key={item.name}>
                                  <div
                                    style={{
                                      display: 'grid',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: '80px',
                                      width: '80px',
                                      backgroundColor: '#e6e6e6',
                                    }}
                                  >
                                    {item.icon}
                                  </div>
                                  <div style={{ textAlign: 'center' }}>{item.name}</div>
                                </div>
                              ))}
                        </div>
                    `}),
                    divider(),
                    title('Media'),
                    code({ title: '', source: `
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 80px 80px 80px 80px 80px',
                            alignContent: 'center',
                            gridGap: '12px',
                          }}
                        >
                            {[
                                { name: 'Copy Link', icon: <CopyLink /> },
                              ].map(item => (
                                <div key={item.name}>
                                  <div
                                    style={{
                                      display: 'grid',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: '80px',
                                      width: '80px',
                                      backgroundColor: '#e6e6e6',
                                    }}
                                  >
                                    {item.icon}
                                  </div>
                                  <div style={{ textAlign: 'center' }}>{item.name}</div>
                                </div>
                              ))}
                        </div>
                    `}),
                    divider(),
                    title('Socials'),
                    code({ title: '', source: `
                        <div
                          style={{
                            display: 'grid',
                            gridTemplateColumns: '80px 80px 80px 80px 80px 80px',
                            alignContent: 'center',
                            gridGap: '12px',
                          }}
                        >
                            {[
                                { name: 'Facebook', icon: <Facebook /> },
                                { name: 'Google Podcast', icon: <GooglePodcast /> },
                                { name: 'Instagram', icon: <Instagram /> },
                                { name: 'Linkedin', icon: <Linkedin /> },
                                { name: 'Pinterest', icon: <Pinterest /> },
                                { name: 'Podcast', icon: <Podcast /> },
                                { name: 'GooglePodcast', icon: <GooglePodcast /> },
                                { name: 'RSS', icon: <Rss /> },
                                { name: 'Soundcloud', icon: <Soundcloud /> },
                                { name: 'Spotify', icon: <Spotify /> },
                                { name: 'Stitcher', icon: <Stitcher /> },
                                { name: 'Tumblr', icon: <Tumblr /> },
                                { name: 'Twitter', icon: <Twitter /> },
                                { name: 'Vimeo', icon: <Vimeo /> },
                                { name: 'Youtube', icon: <Youtube /> },
                              ].map(item => (
                                <div key={item.name}>
                                  <div
                                    style={{
                                      display: 'grid',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      height: '80px',
                                      width: '80px',
                                      backgroundColor: '#e6e6e6',
                                    }}
                                  >
                                    {item.icon}
                                  </div>
                                  <div style={{ textAlign: 'center' }}>{item.name}</div>
                                </div>
                              ))}
                        </div>
                    `}),
                    divider(),
                ],
            }),
        ]),
    ],
};
