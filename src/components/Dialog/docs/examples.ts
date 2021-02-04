export const importExample = `import { Dialog } from 'wix-ui-tpa/Dialog';`;

const buildExample = (content: string) => `
class ModalExample extends React.Component {
  state = {
    isDialogOpen: false,
  };

  onOpenDialogButtonClick = () => this.setState({ isDialogOpen: true });

  onCloseDialog = () => this.setState({ isDialogOpen: false });

  render() {
    const { isDialogOpen } = this.state;

    return (
      ${content}
    );
  }
}
`;

export const example = buildExample(`
    <>
        <Button upgrade onClick={this.onOpenDialogButtonClick}>Open Dialog</Button>
        <Dialog isOpen={isDialogOpen} onClose={this.onCloseDialog}>
            <div className="content" style={{ textAlign: 'center' }}>
                <Text typography="largeTitle">Are You Sure?</Text>
                <div className="text-container" style={{ marginTop: '24px', marginBottom: '36px' }}>
                    <Text typography="listText" tagName="div">
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
                <Button upgrade style={{ marginLeft: '10px' }}>
                    PRIMARY
                </Button>
             </div>
        </Dialog>
    </>
`);

export const mobileExample = buildExample(`
    <MobileExample>
      <Button upgrade onClick={this.onOpenDialogButtonClick}>Open Dialog</Button>
      <Dialog isOpen={isDialogOpen} onClose={this.onCloseDialog} >
        <div className="content" style={{ textAlign: 'center' }}>
            <Text typography="largeTitle" tagName="div">Discard draft?</Text>
            <div className="text-container" style={{ marginTop: '16px', marginBottom: '32px' }}>
                <Text typography="runningText" tagName="div">Are You Sure you want to discard the changes you made?</Text>
            </div>
            <div className="primary-btn-container" style={{marginBottom: '8px'}}>
                  <Button upgrade style={{ width: '100%', boxSizing: 'border-box' }}>
                    PRIMARY
                  </Button>
            </div>
            <Button
              upgrade
              priority={PRIORITY.basicSecondary}
              style={{ width: '100%', boxSizing: 'border-box' }}
            >
              SECONDARY
            </Button>
        </div>
      </Dialog>
     </MobileExample>
`);

export const mobileExampleNotFullscreen = buildExample(`
    <MobileExample>
      <Button upgrade onClick={this.onOpenDialogButtonClick}>Open Dialog</Button>
      <Dialog isOpen={isDialogOpen} onClose={this.onCloseDialog} notFullscreenOnMobile>
        <div className="content" style={{ textAlign: 'center' }}>
            <Text typography="largeTitle" tagName="div">Discard draft?</Text>
            <div className="text-container" style={{ marginTop: '16px', marginBottom: '32px' }}>
                <Text typography="runningText" tagName="div">Are You Sure you want to discard the changes you made?</Text>
            </div>
            <div className="primary-btn-container" style={{marginBottom: '8px'}}>
                  <Button upgrade style={{ width: '100%', boxSizing: 'border-box' }}>
                    PRIMARY
                  </Button>
            </div>
            <Button
              upgrade
              priority={PRIORITY.basicSecondary}
               style={{ width: '100%', boxSizing: 'border-box' }}
            >
              SECONDARY
            </Button>
        </div>
      </Dialog>
     </MobileExample>
`);
