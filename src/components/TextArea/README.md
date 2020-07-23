## TextArea

An implementation of an TextArea for TPAs

### Stylable properties

The TPA implementation provides few extendable theme properties with the ability to override the base properties as well,

| propName   | propType | defaultValue | description |
|------------|----------|--------------|-------------|
| BackgroundColor | string   | color-1 | Background color |
| BorderColor | string   | color-5 | Border color |
| TextColor | string   | color-5 | Font color of the textarea value |
| DisabledTextColor | string   | color-3 | Disabled color of the textarea value |
| DisabledBorderColor | string   | color-3 | Color of border is case of error |
| ErrorBorderColor | string   | errorColor | Color of border is case of error |
| SuccessBorderColor | string   | successColor | Color of border is case of success |
| PlaceholderColor | string   | color-3 | Font color of textarea placeholder value |
| TextFont | string   | {theme: 'Body-M', size: '16px', lineHeight: '1.5em'} | Text font |


In order to override the theme, use Wix Stylable extends capabilities and wrap with stylable HOC:

1. create an stylable file (e.g. TextAreaExtendedExample.st.css)
    ``` css
    :import {
        -st-from: "wix-ui-tpa/TextArea/TextArea.st.css";
        -st-default: TPATextArea;
    }
    
    .textArea {
        -st-mixin: TPATextArea(
            BackgroundColor '"--backgroundColor"',
            BorderColor '"--borderColor"',
            TextColor '"--textColor"',
            PlaceholderColor '"--placeholderColor"',
            TextFont '"--textFont"'
        );
    }

    ```

2. Create a component that uses it
    ``` javascript
    import * as React from 'react';
    import { TextArea } from 'wix-ui-tpa/TextArea';
    import { classes } from './TextAreaExtendedExample.st.css';
    
    export const TextAreaExtendedExample = () => {
      return (
        <div>
          <div>Text example:</div>
          <TextArea
            value={'Text'}
            className={classes.textArea} 
            onChange={() => {}}
          />
          <div>Placeholder example:</div>
          <TextArea
            value=""
            placeholder="Placeholder example"
            className={st(classes.textArea)} 
            onChange={() => {}}
          />
        </div>
      );
    };
    ```
### React Component's properties

| propName   | propType | required | description |
|------------|----------|--------------|-------------|
| onChange | (event: ChangeEvent<HTMLTextAreaElement>) => void   | yes | callback |
| ariaLabel | string   | yes | aria-label attribute |
| value | string   | yes | textarea value |
| disabled | boolean   | - | disabling of textarea |
| error | boolean   | - | show error icon |
| errorDescription | string   | - | error description |
| placeholder | string   | - | textarea placeholder |
| success | boolean   | - | show success icon |
| theme | TextAreaTheme   | - | theme |

| enum TextAreaTheme | 
|------------|
| 'box' |
| 'line' |

### Testkit

All methods return `Promise`

|Available properties|
|--- |
|exists()|
|element()|
|click()|
|value()|
|placeholder()|
|typeText(text)|
|disabled()|
|theme()| 
|error()|
|errorIcon()|
|success()|

####Code example

```
import React from 'react';
import {mount} from 'enzyme';
import {textAreaTestkitFactory} from 'wix-style-react/dist/testkit';
import {textAreaTestkitFactory as enzymeTextAreaTestkitFactory} from 'wix-style-react/dist/testkit/enzyme';

const dataHook = 'myDataHook';

/***************
 enzyme example
***************/

const wrapper = mount(<TextArea dataHook={dataHook} />);
const textAreaDriver = enzymeTextAreaTestkitFactory({wrapper, dataHook});

expect(textAreaDriver.exists()).toBeTruthy();

/**********************
 ReactTestUtils example
**********************/

const div = document.createElement('div');
const wrapper = div.appendChild(
  ReactTestUtils.renderIntoDocument(<TextArea />, {dataHook})
);

const textAreaDriver = textAreaTestkitFactory({wrapper, dataHook});

expect(textAreaDriver.exists()).toBeTruthy();
```
