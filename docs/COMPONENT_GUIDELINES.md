# Guidelines for creating a `wix-ui-tpa` component
`wix-ui-tpa` components are used by TPA's and live in Wix's editor and viewer environment.  
These components will be used and interacted by Wix's *users-of-users*.  
Because of this, there are several considerations we should have in mind while working on a 
`wix-ui-tpa` component:

* `wix-ui-tpa` components are designed by the Design System team, which should approve any 
visual or behavioural change and addition, to the library. 

* Components' style should be customizable, and so, should allow overriding of css 
(in accordance with the design system's spec).

* Components should support SSR (server-side rendering).

* Components should not use javascript for their layout. Javascript calculations that rely on DOM 
dimensions are allowed only on user interactions.

* Components might have different styling and behaviour on mobile.

* Components might have different styling and behaviour on right-to-left locales.

* No assumptions should be made on the components' environment and surroundings. Components might
be used inside TPA pages, but also TPA widgets.  
So solutions like `@media-queries` might not work, and `window` shouldn't be directly accessed.  
In addition, currently TPA's in the editor are still rendered inside an iframe, so the window is 
completely different than the window in the viewer.  

* Widget's in the editor are fluid in their dimensions. `wix-ui-tpa` components should support this.

* Components should be responsive by default.

* `wix-ui-tpa` are rendered for Wix's users-of-users, and so they must comply with web accessibility
 principles.
