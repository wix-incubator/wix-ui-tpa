export const importExample = `import { Modal } from 'wix-ui-tpa/Modal';`;

const buildExample = (content: string) => `
class MobileExample extends React.Component {
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
  <Modal isOpen={isModalOpen} onClose={this.closeModal} rootElement={document.body} />
</>`);

export const mobile = buildExample(`<ExampleWithContextProps mobile={true}>
  <Button onClick={this.openModal}>Open Modal</Button>
  <Modal isOpen={isModalOpen} onClose={this.closeModal} rootElement={document.body} />
</ExampleWithContextProps>`);
