## Toast
An implementation of an Toast for TPAs.
Toasts are used to display important notifications or errors for the entire page.

The Toast TPA implementations provides a few default fixed styles. It means none of them can be overridable. 

### How to use

(Api docs)[https://wix-wix-ui-tpa.surge.sh/?activeTab=API&path=%2Fstory%2Fcomponents--toast]

#### A toast

 ``` javascript
  import { Toast, TOAST_SKIN } from 'wix-ui-tpa/Toast';

  <Toast skin="status">Toast message</Toast>;
```

#### An animated toast

 ``` javascript
  import { Toast, TOAST_SKIN } from 'wix-ui-tpa/Toast';

  <Toast skin="success" shouldAnimate isShown={true}>Toast message</Toast>;
```

Note: for correct animation, you should handle `isShown` state by yourself.
The `<Toast/>` element should exist in the DOM all the time.
When you do not need <Toast/> set `isShown=false`, but keep the element in the DOM.

Such solution allows easily animate appearing/disappearing of the component.