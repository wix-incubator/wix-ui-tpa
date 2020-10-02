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
    <div style={{padding: 20, width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Button onClick={this.closeModal}>Close Modal</Button>
    </div>
  </Modal>
</>`);

export const mobile = buildExample(`<MobileExample>
  <Button onClick={this.openModal}>Open Modal</Button>
  <Modal isOpen={isModalOpen} onRequestClose={this.closeModal}>
    <div style={{padding: 20, width: '100%', display: 'flex', justifyContent: 'center'}}>
      <Button onClick={this.closeModal}>Close Modal</Button>
    </div>
  </Modal>
  </MobileExample>`);
