import * as React from 'react';
import {
    description,
    header,
    divider,
    tab,
    tabs,
    title,
    code as baseCode
} from 'wix-storybook-utils/Sections';
import { allComponents } from './utils/allComponents';
import { StoryCategory } from './storyHierarchy';

const code = config =>
    baseCode({ components: allComponents, compact: true, ...config });

export default {
    category: StoryCategory.ICONS,
    storyName: 'Icons',
    sections: [
        header(),
        tabs([
            tab({
                title: 'Icon Inventory',
                sections: [
                    description({
                        title: 'Description',
                        text: [
                            'The library provides the recommended icons for your applications, provided as raw SVG files. Make sure that your build tool knows how to handle it.',
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
                                { name: 'Anonymous', icon: <Icons.Anonymous /> },
                                { name: 'Calendar', icon: <Icons.Calendar /> },
                                { name: 'Camera', icon: <Icons.Camera /> },
                                { name: 'Heart', icon: <Icons.Heart /> },
                                { name: 'Star', icon: <Icons.Star /> },
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
                                { name: 'Check', icon: <Icons.Check /> },
                                { name: 'Check Success', icon: <Icons.CheckSuccess /> },
                                { name: 'Close', icon: <Icons.Close /> },
                                { name: 'Minus', icon: <Icons.Minus /> },
                                { name: 'Plus Small', icon: <Icons.PlusS /> },
                                { name: 'Plus', icon: <Icons.Plus /> },
                                { name: 'Plus Large', icon: <Icons.PlusL /> },
                                { name: 'Plus XLarge', icon: <Icons.PlusXL /> },
                                { name: 'Share', icon: <Icons.Share /> },
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
                                { name: 'Error', icon: <Icons.Error /> },
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
                                { name: 'Arrow Bottom', icon: <Icons.ArrowBottom /> },
                                { name: 'Arrow Left', icon: <Icons.ArrowLeft /> },
                                { name: 'Arrow Right', icon: <Icons.ArrowRight /> },
                                { name: 'Arrow Top', icon: <Icons.ArrowTop /> },
                                { name: 'Caret Down', icon: <Icons.CaretDown /> },
                                { name: 'Chevron Left', icon: <Icons.ChevronLeft /> },
                                { name: 'Chevron Right', icon: <Icons.ChevronRight /> },
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
                                { name: 'Copy Link', icon: <Icons.CopyLink /> },
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
                                { name: 'Facebook', icon: <Icons.Facebook /> },
                                { name: 'Google Podcast', icon: <Icons.GooglePodcast /> },
                                { name: 'Instagram', icon: <Icons.Instagram /> },
                                { name: 'Linkedin', icon: <Icons.Linkedin /> },
                                { name: 'Pinterest', icon: <Icons.Pinterest /> },
                                { name: 'Podcast', icon: <Icons.Podcast /> },
                                { name: 'GooglePodcast', icon: <Icons.GooglePodcast /> },
                                { name: 'RSS', icon: <Icons.Rss /> },
                                { name: 'Soundcloud', icon: <Icons.Soundcloud /> },
                                { name: 'Spotify', icon: <Icons.Spotify /> },
                                { name: 'Stitcher', icon: <Icons.Stitcher /> },
                                { name: 'Tumblr', icon: <Icons.Tumblr /> },
                                { name: 'Twitter', icon: <Icons.Twitter /> },
                                { name: 'Vimeo', icon: <Icons.Vimeo /> },
                                { name: 'Youtube', icon: <Icons.Youtube /> },
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
