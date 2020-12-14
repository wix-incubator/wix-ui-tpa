import * as React from 'react';
import { Dialog } from '../';
import { ToggleSwitch } from '../../ToggleSwitch';
import { Text, TYPOGRAPHY } from '../../Text';
import { Button, PRIORITY } from '../../Button';
import { classes } from './DialogWiringExample.st.css';

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
          <div className={classes.content} style={{ textAlign: 'center' }}>
            <Text typography={TYPOGRAPHY.largeTitle}>Are You Sure?</Text>
            <div
              className="text-container"
              style={{ marginTop: '24px', marginBottom: '36px' }}
            >
              <Text typography={TYPOGRAPHY.listText} tagName="div">
                <div>Do you really want to delete the selected files?</div>
                <div>Once removed, cannot be undone.</div>
              </Text>
            </div>
            <Button
              upgrade
              priority={PRIORITY.basicSecondary}
              style={{ marginLeft: '10px' }}
            >
              SECONDARY
            </Button>
            <Button
              upgrade
              style={{ marginLeft: '10px' }}
              priority={PRIORITY.primary}
            >
              PRIMARY
            </Button>
          </div>
        </Dialog>
      </>
    );
  };
}
