## Modal
An implementation of an Modal for TPAs.

The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.

The modal consists of a container with specified inner padding and a close button. It is places as a layer on top of the website, and can come with a dark background or no background.

The modal TPA implementation provides a few default styles.
### Theme properties
| Component      | Default value            | Overridable |
|----------------|--------------------------|-------------|
| DialogBgColor  | #ffffff                  | true        |
| OverlayBgColor | #000000 60% opacity      | false       |

### How to use
```typescript jsx
import * as React from 'react';
import { Modal, ModalProps } from 'wix-ui-tpa/Modal';

export class ExampleModalApp extends React.Component<Partial<ModalProps>> {
  state = {
    isModalOpened: false,
  };

  openModal = () => {
    this.setState({ isModalOpened: true });
  };

  closeModal = () => {
    this.setState({ isModalOpened: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Trigger Modal</button>
        <Modal
          isOpen={this.state.isModalOpened}
          onRequestClose={this.closeModal}
          {...this.props}
        >
          {this.props.children}
        </Modal>
      </div>
    );
  }
}
```