# wix-ui-tpa

`wix-ui-tpa` is a library of React components that are designed to be used in Wix TPA's.

#### [Demo](https://wix-wix-ui-tpa.surge.sh/) | [Demo App](https://github.com/wix/wix-ui-tpa-example)
  
## Installation
* Install with `npm` or `yarn`:
```sh
npm i wix-ui-tpa
# OR
yarn add wix-ui-tpa
```
 
## Prerequisites
`wix-ui-tpa` uses [Stylable](https://stylable.io/) configuration by default.   
In order to use `wix-ui-tpa`, your module bundler should be configured accordingly.

## Usage
Using components is pretty much like any other React component:
```typescript jsx
import React from 'react';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';
import { Text, TYPOGRAPHY } from 'wix-ui-tpa/Text';
import { Button } from 'wix-ui-tpa/Button';

class App extends React.Component {
    render() {
        const { mobile, rtl } = this.props;
        
        return (
            <TPAComponentsProvider value={{ mobile, rtl }}>
                <Text typography={TYPOGRAPHY.largeTitle}>Hello World</Text>
                <Button onClick={() => alert('Alerts are annoying')}>Click me</Button>
            </TPAComponentsProvider>  
        );   
    }
}
```
(Be sure to add the `TPAComponentsProvider` to the root of your project, in order to support
`mobile` and `rtl` displays).
 
Components' styles can be overridden like this:
```typescript jsx
// Input.tsx 
import React from 'react';
import { Input } from 'wix-ui-tpa/Input';
import styles from './Input.st.css';

class MyInput extends React.Component {
    render() {
        return (
            <Input 
                {...styles('root', {}, this.props)}
                // ...
            />
        );
    }
}

```
```css
// Input.st.css 
:import {
  -st-from: "wix-ui-tpa/index.st.css";
  -st-named: Input;
}

.root {
  --yourSettingsKey: "color(color-5)";
  -st-extends: Input;
  -st-mixin: Input(
    MainTextColor '"color(--yourSettingsKey)"'
  );
}
```
The library relies on [wix-style-processor](https://github.com/wix/wix-style-processor) 
on parsing Wix template colors, fonts and settings' keys.  
For more on this, and on how to use the library and override components' styles, 
refer to the [Usage document](./docs/USAGE.md).

## Test drivers
All of `wix-ui-tpa` components are 100% tested and supplies test drivers for easy 
interactions in your tests. Read more about it in `wix-style-react`'s excellent 
documentation [here](https://github.com/wix/wix-style-react/blob/master/docs/usage/COMPONENTS_DRIVERS.md).

## Contributing
Please refer to the [Contribution document](./docs/CONTRIBUTION.md).







  
    
<!--
When writing a TPA application to be used in Wix websites, this package would allow you to use [wix-ui-core](https://github.com/wix/wix-ui/tree/master/packages/wix-ui-core) components with ad-hoc wrapping layer which comunicates with the Wix sdk in order to react to each relevant change in the settings pannel.

If this is the first time you are writing a TPA application, you would most likely want to read this [doc](https://dev.wix.com/).


## Using the withStylable HOC wrapper

In order to customize a component using styleable, you should wrap the component you want to style using the withStyleable HOC.
The out of the box components provided by this library are inheriting the styles of the site according to the common defaults styles, but if you need to extend it do the following,

1. Create a stylable st.css file that extends the component that you want to style (e.g. an input):

    For more information about the capabilities of the stylable library refer to [https://stylable.io/](https://stylable.io/)
    
    For more information about the "color(something)" syntax please refer to [wix-style-processor](https://github.com/wix/wix-style-processor) documentation.


2. create your own component that uses the overridden theme
    ``` javascript
    import * as React from 'react';
    import {withStylable} from 'wix-ui-core/withStylable';
    import {Input, InputProps} from 'wix-ui-tpa/Input';
    import extendedStyles from './InputExtendedExample.st.css';

    export const InputExtendedExample = withStylable<InputProps>(Input, extendedStyles, () => null);
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

In order to wrap a ui-core component with the TPA styles, repeate the same steps as the wrapping of wix-ui-tpa component described above, but with the correspondent component from ui-core lib,
You can use [Input](./src/components/Input/index.tsx) component as a good reference, it includes basic themeing as well as a test file.

As a general approach, each TPA stylable compoennt, should expose a limted set of stylable attributes, which are used in order to create the ui-core style, with the ability to override specific ones as well;
See [Input](./src/components/Input/Input.st.css) as an example, as you can see there are few variables defined in it (marked with /*Recommended Variables*/) followed by the entire list of variables defined in the parent component, which are built from the recommended set. The core mixin is than used in order to render the styles of the TPA theme, which allows the user of the library to either override a property that will impact several core properties (e.g. ***MainBorderColor***), or to override a core property (e.g. ***hoverBorderColor***) in order to achieve the desired style.

## Testing with jest
Since st.css are build time files, jest has to be familiar and parse them.
As a result, a jest trasnformer is required in order to handle them:

1. Install stylable-integration library
    ```npm i -D stylable-integration```
2. Add a transform definition to package.json
    ``` json
    "jest": {
        "transform": {
          "\\.(css)$": "stylable-integration/jest"
        }
    }
    ```

3. Since you are probably using st.css files from the tpa/core ui library, jest has to transform files in node_modules library, so please make sure that in package.json, "transformIgnorePatterns" property does not include node_modules library.
  Note that jest ignores node_modules library by default so in case you do not have this prop defined, please define it as an empty array:
  ``` json
      "jest": {
        "transformIgnorePatterns": []
      }
     ```

-->
