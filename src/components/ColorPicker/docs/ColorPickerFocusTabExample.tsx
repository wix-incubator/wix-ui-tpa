import * as React from 'react';
import { classes } from './ColorPickerFocusTabExample.st.css';
import { ColorPickerExtendedExample } from './ColorPickerExtendedExample';


export class ColorPickerFocusTabExample extends React.Component<{}> {
  render = () => (
    <div>
      <ColorPickerExtendedExample />
      <br/>
      <ColorPickerExtendedExample />
      <br/>
      <button className={classes.button}>Select me</button>
      <br/>
      <button className={classes.button}>Select me 2</button>
    </div>
  );
}
