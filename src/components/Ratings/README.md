## Ratings
An implementation of a Ratings for TPAs


## Theme properties (All are optional)

| propName   | propType | defaultValue     | description                                         |
|------------|----------|------------------|-----------------------------------------------------|
| IconColor  | string   | color-5          | The color of the icon instead of the default color  |
| IconEmptyColor | string   | color-3  | The color of not filled icon in display mode |
| TextColor | string   | color-5  | The color of all labels |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. RatingsExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Ratings/Ratings.st.css";
        -st-default: TPARatings;
    }

    .root {
        -st-mixin: TPARatings(
            IconColor '"--iconColor"',
            IconEmptyColor '"--iconEmptyColor"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import Ratings from 'wix-ui-tpa/Ratings';
    import { classes } from './RatingsExt.st.css';

    const RatingsExt = (props) => (
        <Ratings
            value={0}
            {...props}
            className={classes.root}
        />);
    ```
