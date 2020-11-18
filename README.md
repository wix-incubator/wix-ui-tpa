# wix-ui-tpa

`wix-ui-tpa` is a library of React components that are designed to be used in Wix TPA's.

#### [Demo](https://bo.wix.com/pages/wix-ui-tpa) | [Demo App](https://github.com/wix/wix-ui-tpa-example)
  
## Installation
* Install with `npm` or `yarn`:
```sh
npm i wix-ui-tpa
# OR
yarn add wix-ui-tpa
```
 
## Prerequisites
`wix-ui-tpa` uses [Stylable](https://stylable.io/) configuration, and depends on 
[`wix-style-processor`](https://github.com/wix/wix-style-processor) by default.     
In order to use `wix-ui-tpa`, your module bundler and app should be configured accordingly.

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
 
Components' styles are the suggested defaults, but can be overridden like this:

```typescript jsx
// MyInput.tsx 
import React from 'react';
import { Input } from 'wix-ui-tpa/Input';
import { classes } from './MyInput.st.css';
export const MyInput: React.FC = () => <Input className={classes.root} />
```

```css
// MyInput.st.css 
:import {
  -st-from: "wix-ui-tpa/index.st.css";
  -st-named: Input;
}

.root {
  -st-mixin: Input(
    MainTextColor '"color(color-5)"'
  );
}
```
The library relies on [wix-style-processor](https://github.com/wix/wix-style-processor) or [tpa-style-webpack-plugin](http://github.com/wix-incubator/tpa-style-webpack-plugin) on parsing Wix template colors, fonts and settings' keys.
For more on this, and on how to use the library and override components' styles, refer to the [Usage document](./docs/USAGE.md).

## Test drivers
All of `wix-ui-tpa` components are 100% tested and supplies test drivers for easy 
interactions in your tests. Read more about it in `wix-style-react`'s excellent 
documentation [here](https://github.com/wix/wix-style-react/blob/master/docs/usage/COMPONENTS_DRIVERS.md).

## Contributing
Please refer to the [Contribution document](./docs/CONTRIBUTION.md).

## Release Process
Please refer to the [Version Release document](./docs/internal/VERSION_RELEASE.md).
