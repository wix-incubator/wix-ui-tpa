# RTL Support

Right-to-left (also known as RTL) is a form of writing so that the direction starts from the right and continues to the left.

`wix-ui-tpa` components support RTL out-of-the-box, meaning, they adjust themselves to the correct reading direction of the application.

## How to Use

In order to apply RTL correctly for the library we'll need to use two things:

1. Using `TPAComponentsProvider` while enabling the `rtl` option.
2. Making sure the `dir` attribute is already set as `rtl` in the DOM hierarchy. Notice that the viewer might set the correct direction by itself on the `body` or on an ancestor of the component. If not, we can always set it on the root of the component by ourselves.

Here's an example for `App.ts`:

```jsx
import React from 'react';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';

// Step 1: Enabling RTL
const isRTL = true;

// Step 2: Setting `dir` as `rtl` directly on the root (this attribute could also come from the viewer, so check it before setting)
const MyApp = () => <div dir="rtl">Hello World!</div>;

export const App: React.FC = () => (
  <TPAComponentsProvider value={{ rtl: isRTL }}>
    <MyApp />
  </TPAComponentsProvider>
);
```

The example above demonstrates an application that uses `TPAComponentsProvider` to enable `rtl`.

Also it renders `<MyApp/>` which constitutes our application in practice. Notice we set `dir` as `rtl` on the root of `<MyApp/>`.

## How It Works

All components of the library require the `dir` attribute to allow the compatibility - and that's why we should verify this attribute is set as `rtl`. Also, some of the components use `TPAComponentsConsumer` to consume the rtl configuration.

Combining both ways, the components can adjust their structure and/or style to the direction. The adjustments might be done using rendering different HTML, flexbox, `::before` and `::after` (that play as `padding-start`/`margin-start` & `padding-end`/`margin-end`) and more techniques.
