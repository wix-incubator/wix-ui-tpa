import * as React from 'react';
import { Dialog } from '../';
import { ToggleSwitch } from '../../ToggleSwitch';
import { Text } from '../../Text';
import { classes } from './DialogWiringExample.st.css';

import { Button } from '../../Button';

export class DialogWiringExample extends React.Component {
  state = {
    isOpen: false,
    isWired: false,
  };

  _onOpenDialogButtonClick = () => {
    this.setState({ isOpen: true });
  };

  _onCloseDialog = () => {
    this.setState({ isOpen: false });
  };

  _onWireChange = () => {
    const { isWired } = this.state;
    this.setState({ isWired: !isWired });
  };

  render = () => {
    const { isOpen, isWired } = this.state;
    return (
      <>
        <div
          style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}
        >
          <label htmlFor="wireToggle" style={{ marginRight: 12 }}>
            <Text>Wire to site colors:</Text>
          </label>
          <ToggleSwitch
            id="wireToggle"
            checked={isWired}
            onChange={this._onWireChange}
          />
        </div>
        <Button upgrade onClick={this._onOpenDialogButtonClick}>
          Open Dialog
        </Button>
        <Dialog
          className={classes.dialogComponent}
          isOpen={isOpen}
          onClose={this._onCloseDialog}
          wiredToSiteColors={isWired}
        >
          <div className={classes.content}>This is the content!</div>
        </Dialog>
      </>
    );
  };
}
