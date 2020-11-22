# Using RTL

Right-to-left (also known as RTL) is a form of writing so that the direction starts from the right and continues to the left.

The components of `wix-ui-tpa` are RTL-compatible and support that built-in, meaning that all the structure of the component changes from right to the left as well.

## How to Use

In order to apply RTL correctly for the library we'll need to use two things:

1. Using `TPAComponentsProvider` while enabling the `rtl` option
2. Setting the `dir` attribute as `rtl` on the root element

Here's an example for `App.ts`:

```jsx
import React from 'react';
import { TPAComponentsProvider } from 'wix-ui-tpa/TPAComponentsConfig';

// Step 1: Enabling RTL
const isRTL = true;

// Step 2: Setting `dir` as `rtl`
const MyApp = () => <div dir="rtl">Hello World!</div>;

export const App: React.FC = () => (
  <TPAComponentsProvider value={{ rtl: isRTL }}>
    <MyApp />
  </TPAComponentsProvider>
);
```

The example above demonstrates an application that uses `TPAComponentsProvider` to enable `rtl`.

Also it renders `<MyApp/>` which constitutes our application in practice. Notice we set `dir` as `rtl` on the root of `<MyApp/>`.
