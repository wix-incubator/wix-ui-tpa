## Rating
An implementation of an Rating for TPAs


## Theme properties (All are optional)

| propName   | propType | defaultValue     | description                                         |
|------------|----------|------------------|-----------------------------------------------------|
| IconColor  | string   | color-5          | The color of the icon instead of the default color  |
| IconEmptyColor | string   | color-3  | The color of not filled icon in display mode |

In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. RatingExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/Rating/Rating.st.css";
        -st-default: TPARating;
    }

    .root {
        -st-mixin: TPARating(
            IconColor '"--iconColor"',
            IconEmptyColor '"--iconEmptyColor"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import Rating from 'wix-ui-tpa/Rating';
    import ratingStylesExt from './RatingExt.st.css';

    const RatingExt = (props) => (
        <Rating
            value={0}
            {...props}
            {...ratingStylesExt('root', {}, props)}
        />);
    ```
