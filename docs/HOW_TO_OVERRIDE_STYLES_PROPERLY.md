# How to Override Styles Properly

### **tl;dr**
1. Override styles using `-st-mixin` and use the Stylable variables we expose.
   Don't target internal elements!
2. Visually test your app, especially at points where you use wix-ui-tpa
3. Test your app/components with different site palettes, fonts and numbers.  
   Run tests using both a light theme and a dark theme.


### How to override a component's styles?
> Be sure to read the guide in our [Usage document](
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
   MainTextColor
   ...
}
```
These variables will be found in the `Style API` tab in the component's storybook.

If the component uses the new approach for overrides (using the `overrideStyleParams` class), 
use that to extend the component (as described in the aforementioned [guide](
https://github.com/wix/wix-ui-tpa/blob/master/docs/USAGE.md#an-optimized-way-for-style-overriding---new))  
If not, then use its "default" `.root` export for overrides.

In any case **DO NOT** use `-st-extends` to override styles by targeting internal elements.


<div style="background-color: transparent; display: grid; grid-gap: 20px; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));">
   <div style="background-color: white; padding: 16px; margin-right: 20px;">
    <div style="background-color: rgba(63, 219, 144, 0.3)">
      <pre style="white-space: pre-wrap;margin: 0;"><span style="color: #BB0066; font-weight: bold">:import</span> {
  <span style="color: #008800; font-weight: bold">-st-from</span><span style="color: #333333">:</span> <span style="color: #007020">"wix-ui-tpa/.../Component.st.css"</span>;
  <span style="color: #008800; font-weight: bold">-st-named</span><span style="color: #333333">:</span> <span style="color: #007020">overrideStyleParams</span>;
  /* If overrideStyleParams doesn't exist use: */
  /* <span style="font-weight: bold">-st-default</span>: TPAComponent; */
}
<span style="color: #BB0066; font-weight: bold">.myComponent</span> {
  <span style="color: #008800; font-weight: bold">-st-mixin</span><span style="color: #333333">:</span> <span style="color: #007020">overrideStyleParams(</span>
    <span style="color: #007020">TextColor &lt;your-variable-here&gt;</span>
  <span style="color: #007020">)</span>;
  /* If overrideStyleParams doesn't exist use: */
  /* <span style="font-weight: bold">-st-mixin</span>: TPAComponents(...); */
}</pre>
    </div>
    <span style="display: inline-block; margin-top: 16px;background-color: rgba(63, 219, 144, 1); font-size: 13px; padding: 4px 16px; border-radius: 1.5em; color: white; line-height: 18px;">
      Correct usage!
    </span>
    <p style="color: black;">
     Use the <code>overrideStyleParams</code> mixin to override styles.
    </p>
   </div>

   <div style="background-color: white; padding: 16px; margin-right: 20px;">
    <div style="background-color: rgba(244, 67, 54, 0.3)">
      <pre style="margin: 0;"><span style="color: #BB0066; font-weight: bold">:import</span> {
  <span style="color: #008800; font-weight: bold">-st-from</span><span style="color: #333333">:</span> <span style="color: #007020">"wix-ui-tpa/.../Component.st.css"</span>;
  <span style="color: #008800; font-weight: bold">-st-default</span><span style="color: #333333">:</span> <span style="color: #007020">TPAComponent</span>;
}
<span style="color: #BB0066; font-weight: bold">.myComponent</span> {
  <span style="color: #008800; font-weight: bold">-st-extends</span><span style="color: #333333">:</span> <span style="color: #007020">TPAComponent</span>;
}
<span style="color: #BB0066; font-weight: bold">.myComponent::innerElement</span> {
  <span style="color: #008800; font-weight: bold">background-color</span><span style="color: #333333">:</span> <span style="color: #007020">&lt;some-color&gt;</span>;
}</pre>
    </div>
    <span style="display: inline-block; margin-top: 16px;background-color: rgba(244, 67, 54, 1); font-size: 13px; padding: 4px 16px; border-radius: 1.5em; color: white; line-height: 18px;">
      Wrong usage :( 
    </span>
    <p style="color: black;">
     Do not override internal elements' styles, as they may change, which will cause your app to break in production
    </p>
   </div>
</div>

## troubleshooting:
1. Feature is missing -> contact us #wix-ui-tpa
2. 

## You're targeting internal elements 
Well, in that case there's not much we can do at the moment.  
However, you must understand that anything except style variables is considered private api, and can be changed at any point in time.  


## I don't know if I'm overriding components right or wrong, what should I do?
1. contact us at #wix-ui-tpa, and show us your use-case
2. 

