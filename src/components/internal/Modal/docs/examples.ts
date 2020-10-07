export const importExample = `import { Modal } from 'wix-ui-tpa/Modal';`;

const buildExample = (content: string) => `
class ModalExample extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    
    return (
      ${content} 
    );
  }
}
`;

export const base = buildExample(`<>
  <Button onClick={this.openModal}>Open Modal</Button>
  <Modal isOpen={isModalOpen} onRequestClose={this.closeModal}>
    <div className="modal-content-wrapper" style={{padding: 20, display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -30%)', background: '#fff' }}>
       <Button onClick={this.closeModal}>Close Modal</Button>
    </div>
  </Modal>
</>`);

export const mobile = buildExample(`<MobileExample>
  <Button onClick={this.openModal}>Open Modal</Button>
  <Modal isOpen={isModalOpen} onRequestClose={this.closeModal}>
    <div className="modal-content-wrapper" style={{ padding: 20, width: '100%', height: '100%', position: 'absolute', top: "50%", left: "50%", transform: 'translate(-50%, -50%)', background: '#fff'}}>
          <div style={{display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Button onClick={this.closeModal}>Close Modal</Button>
          </div>
    </div>
  </Modal>
  </MobileExample>`);
