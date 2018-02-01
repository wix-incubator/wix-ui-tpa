# wix-ui-tpa

When writing a TPA application to be used in Wix websites, this package would allow you to use [wix-ui-core](https://github.com/wix/wix-ui/tree/master/packages/wix-ui-core) components with ad-hoc wrapping layer which comunicates with the Wix sdk in order to react to each relevant change in the settings pannel.

If this is the first time you are writing a TPA application, you would most likely want to read this [doc](https://dev.wix.com/).

## Using the withStylable HOC wrapper

In order to customize a component using styleable, you should wrap the component you want to style using the withStyleable HOC.
The out of the box components provided by this library are inheriting the styles of the site according to the common defaults styles, but if you need to extend it do the following,

1. Create a stylable st.css file that extends the component that you want to style (e.g. an input):
    ```css
    //st.css file
    :import {
      -st-from: "wix-ui-tpa/dist/src/components/Input/Input.st.css";
      -st-default: Input;
    }

    .root {
      --yourSettingsKey: "color(color-5)"
      -st-extends: Input;
      -st-mixin: Input(
        //overriden definitions
        MainTextColor '"color(--yourSettingsKey)"'
      );
    }
    ```
    For more information about the capabilities of the stylable library refer to [https://stylable.io/](https://stylable.io/)
    For more information about the "color(something)" syntax please refer to [wix-style-processor](https://github.com/wix/wix-style-processor) documentation.


2. create your own component that uses the overridden theme
    ``` javascript
    import * as React from 'react';
    import {withStylable} from 'wix-ui-core/dist/src';
    import {TpaInput, TpaInputProps} from 'wix-style-tpa/Input';
    import extendedStyles from './InputExtendedExample.st.css';

    export const InputExtendedExample = withStylable<TpaInputProps>(TpaInput, extendedStyles, () => null);
    ```

3. You can now render the new component:
    ``` javascript
        render() {
            return <InputExtendedExample/>;
        }
    ```

## Adding components to the application

Each component in `wix-ui-tpa` is an HOC that gets the `colors` and `fonts` of the site in addition to all the core component's props.

colors and sites are the values specified in the Wix sdk: `Wix.Styles.getStyleParams()`.

Now each time the user will change the settings pannel's components, it will update the style of the components.

## Testing with jest
Since st.css are build time files, jest has to be familiar and parse them.
As a result, a jest trasnformer is required in order to handle them:

1. Install stylable-integration library
    ```npm i -D stylable-integration```
2. Add a transform definition to package.json
    ``` json
    "jest": {
        ///...
        "transform": {
          "\\.(css)$": "stylable-integration/jest"
        }
        //...
    }
    ```

3. Since you are probably using st.css files from the tpa/core ui library, jest has to transform files in node_modules library, so please make sure that in package.json, "transformIgnorePatterns" property does not include node_modules library.
  Note that jest ignores node_modules library by default so in case you do not have this prop defined, please define it as an empty array:
  ``` json
      "jest": {
        //...
        "transformIgnorePatterns": []
        //...
      ```