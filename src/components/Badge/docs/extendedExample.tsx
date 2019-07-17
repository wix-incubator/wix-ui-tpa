import * as React from 'react';
import CodeExample from 'wix-storybook-utils/CodeExample';
import * as ExtendedRawSource from '!raw-loader!./BadgeExtendedExample.tsx';
import * as ExtendedCSSRawSource from '!raw-loader!./BadgeExtendedExample.st.css';
import { BadgeExtendedExample } from './BadgeExtendedExample';

import { MockSettings } from '../../../../stories/helperComponents/MockSettings';

export const ExtendedExample = () => {
    return <div>
        <div className="tpa-container">
            <CodeExample
                title="Badge"
                code={[
                    '//.st.css',
                    ExtendedCSSRawSource,
                    '',
                    '//.tsx',
                    ExtendedRawSource,
                ].join('\n')}
            >
                <BadgeExtendedExample/>
            </CodeExample>
        </div>
        <MockSettings
            wixColorParams={[
                {
                    label: 'Badge background color',
                    wixParam: 'badgeBgColor',
                    defaultColor: 'color-5',
                },
                {
                    label: 'Badge border color',
                    wixParam: 'badgeBorderColor',
                    defaultColor: 'color-5',
                },
                {
                    label: 'Badge text color',
                    wixParam: 'badgeTextColor',
                    defaultColor: 'color-1',
                },
            ]}
        />
    </div>;
};