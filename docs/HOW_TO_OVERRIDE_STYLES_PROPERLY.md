# How to Override Styles Properly

### **tl;dr**
1. Override styles using `-st-mixin` and use the Stylable variables we expose.
   Don't target internal elements!
2. Visually test your app, especially at points where you use wix-ui-tpa
3. Test your app/components with different site palettes, fonts and numbers.  
   Run tests using both a light theme and a dark theme.


### How to override a component's stylesheet?
> Be sure to read our [Usage document](
https://github.com/wix/wix-ui-tpa/blob/master/docs/USAGE.md#overriding-predefined-style-params)

wix-ui-tpa components are wired to users' sites palettes and fonts out-of-the-box.  
In addition, most of the components also allow TPA's to extend their style. We achieve this by 
using Stylable's `-st-mixin`.

Each component declares the variables it exposes, like this:
```css
/* Overrides */
:vars {
   /* 
     Text Color
     @default color-5
   */
   MainTextColor: --overridable;
}
```
These variables will be found in the `Style API` tab in the component's storybook.

If the component uses the new approach for overrides (using the `overrideStyleParams` class), 
use that to extend the component (as described in the aforementioned [guide](
https://github.com/wix/wix-ui-tpa/blob/master/docs/USAGE.md#an-optimized-way-for-style-overriding---new))  
If not, then use its "default" `.root` export for overrides.

In any case **DO NOT** use `-st-extends` to override styles by targeting internal elements.

#### Examples

✅ DO

```css
:import {
   -st-from: "wix-ui-tpa/.../Component.st.css";
   -st-named: overrideStyleParams;
   
   /* If overrideStyleParams doesn't exist use: */
   /* -st-default: TPAComponent; */
}

.myComponent {
   -st-mixin: overrideStyleParams(
     TextColor <your-color-here>
   );

   /* If overrideStyleParams doesn't exist use: */
   /* -st-mixin: TPAComponent(...); */
}
```

❌ DON'T

```css
:import {
   -st-from: "wix-ui-tpa/.../Component.st.css";
   -st-default: TPAComponent; 
}

.myComponent {
   -st-extends: TPAComponent;
}

.myComponent::innerElement { /* Don't target internal elements, these might change */
   background-color: <some-color>;
}
```

## FAQ's

#### "The component doesn't expose the variables I need, what should I do?"
First, contact us at [#wix-ui-tpa](https://wix.slack.com/archives/CJRU3U97A).  
We'll check with our designers that the variables align with the [design system](
https://zeroheight.com/7sjjzhgo2/p/7181b5-tpa-design-system).  
If the designers approve, you'll be able to contribute the new variables.

#### "Can I style the component's root element?"
Well yes, and no 😳  
All of our components accept a `className` prop, which is applied to the root element.  
In addition to extending styles, using `-st-mixin`, you can use this className to control the 
layout of you app.  
So you can use rules such as `position`, `width`, `left`, `top`, `flex`, etc.  
Don't use this className to change text or background color, border's or padding, as this might 
break the component, or it might not be aligned to the design system at all.  
Also beware of using the `display` rule on the root element, as this may break the component's 
internal layout. If you need to change its `display` and it breaks the component, please contact us
at our [slack channel](https://wix.slack.com/archives/CJRU3U97A) and we'll try to find a solution 
together.

Examples:

✅ DO

```css
:import {
   -st-from: "wix-ui-tpa/.../Component.st.css";
   -st-named: overrideStyleParams;
}

.myComponent {
   -st-mixin: overrideStyleParams(...);
   position: absolute;
   top: 0;
   left: 0;
}
```

❌ DON'T

```css
:import {
   -st-from: "wix-ui-tpa/.../Component.st.css";
   -st-named: overrideStyleParams;
}

.myComponent {
   -st-mixin: overrideStyleParams(...);
   /* don't add styles like these below: */
   background-color: cornflowerblue;
   border: 1px solid gold;
   display: inline;
}
```
 

#### "I have a release in an hour, and I'm targeting internal elements. I'll add a task to fix it in the future, that's ok right?" 
Well, there's not much we, the wix-ui-tpa team, can do at this point.  
However, you should be aware that even a minor change we will make might cause your app to break, 
and might cause a **[serious production issue](https://jira.wixpress.com/browse/INC-5684)**.  
Before your release, make sure you have visual tests that cover all your use-cases, and most
importantly, test these use-cases with at least one light and one dark theme.


#### "I read the document, but I'm still not sure I'm overriding components correctly. What should I do?"
Contact us at [#wix-ui-tpa](https://wix.slack.com/archives/CJRU3U97A), and show us your use-case
