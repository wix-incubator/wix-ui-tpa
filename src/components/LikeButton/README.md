## LikeButton
An implementation of a LikeButton for TPAs,

By default the LikeButton will pull the theme from the site (site colors),

## Theme properties (All are optional)

| propName   | propType | defaultValue                     | description                                                                                       |
|------------|----------|----------------------------------|---------------------------------------------------------------------------------------------------|
| IconColor  | string   | color-5 (when checked - #F64D43) | The color of the icon border instead of the default color (checked state color cannot be changed) |
| LabelColor | string   | color-5                          | The color of the label instead of the default color                                               |
| LabelFont  | string   | Body-M 12px/16px                 | The font of the label instead of the default font                                                 |

In order to override the theme, use Wix Stylable `extends` capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. LikeButtonExt.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/LikeButton/LikeButton.st.css";
        -st-default: TPALikeButton;
    }
    
    .root {
        -st-extends: TPALikeButton;
        -st-mixin: TPALikeButton(
            IconColor '"--iconColor"',
            LabelColor '"--labelColor"',
            LabelFont '"--labelFont"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import LikeButton from 'wix-ui-tpa/LikeButton';
    import likeButtonStylesExt from './LikeButtonExt.st.css';

    const LikeButtonExt = (props) => (
        <LikeButton 
            label="0"
            {...props}
            {...likeButtonStylesExt('root', {}, props)}
        />);
    ```
