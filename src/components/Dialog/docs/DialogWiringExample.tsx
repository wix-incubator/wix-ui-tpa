import * as React from 'react';
import { Dialog } from '../';
import { classes } from './DialogWiringExample.st.css';

import { Button } from '../../Button';

export class DialogWiringExample extends React.Component {
  state = {
    isOpen: false,
  };

  onOpenDialogButtonClick = () => {
    this.setState({ isOpen: true });
  };

  onCloseDialog = () => {
    this.setState({ isOpen: false });
  };

  render = () => {
    const { isOpen } = this.state;
    return (
      <>
        <Button upgrade onClick={this.onOpenDialogButtonClick}>
          Open Dialog
        </Button>
        <Dialog
          className={classes.dialogComponent}
          isOpen={isOpen}
          onClose={this.onCloseDialog}
        >
          <div className={classes.content}>This is the content!</div>
        </Dialog>
      </>
    );
  };
}
