## SectionNotification
Section notification displays an important, succinct message, and provides actions for users to address and can not be dismissed.

It appears at the relevant app section and push the content below it.

Section notifications can contain Icon / Text / Buttons

### How to use

[Api docs](https://wix-wix-ui-tpa.surge.sh/?path=//story/components--sectionnotification)

## Theme properties (All are optional)

| propName         | propType | defaultValue                     | description                            |
|------------------|----------|----------------------------------|----------------------------------------|
| BackgroundColor  | string   | color-5                          | The background color of notification   |
| TextColor        | string   | color-5                          | The text color of notification         |

In order to override the theme, use Wix Stylable `extends` capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. SectionNotificationExt.st.css)
    ``` css
    :import {
      -st-from: "../SectionNotification.st.css";
      -st-default: TPASectionNotification;
    }

    .root {
      -st-mixin: TPASectionNotification(
        BackgroundColor '"color(--backgroundColor)"'
        TextColor '"color(--textColor)"'
      );
    }
    ```

2. Create a component that uses it
    ``` javascript
    import * as React from 'react';
    import extendedStyles from './SectionNotificationExt.st.css';
    import { ReactComponent as ErrorIcon } from './Error.svg';
    import { SectionNotification } from 'wix-ui-tpa/SectionNotification';

    export class IconButtonExtendedExample extends React.Component {
      render = () => (
        <SectionNotification
          icon={<ErrorIcon />}
          text="Notification text"
          {...this.props}
          {...extendedStyles('root', {}, this.props)}
        />
      );
    }
    ```
