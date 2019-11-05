import * as React from 'react';
import {TPAComponentsConsumer} from '../TPAComponentsConfig';
import ReactModal from 'react-modal';

import styles from './Modal.st.css';
import {IconButton} from "../IconButton";
import {Close} from "../../assets/icons";

export interface ModalProps {
    isOpen: boolean;

    onRequestClose(): void;

    withCloseButton?: boolean;
    withBackground?: boolean;
}

interface DefaultProps {
    withCloseButton: boolean;
    withBackground: boolean;
}

interface State {
}

/** The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else. */
export class Modal extends React.Component<ModalProps, State> {
    static displayName = 'Modal';
    static defaultProps: DefaultProps = {
        withCloseButton: true,
        withBackground: true
    };
    private readonly ref = React.createRef<HTMLDivElement>();

    render() {
        const {isOpen, onRequestClose, withBackground, withCloseButton, children, ...rest} = this.props;
        return (
            <TPAComponentsConsumer>
                {({mobile}) => (
                    <div {...styles('root', {mobile, withBackground}, rest)} ref={this.ref}>
                        {this.ref.current ?
                            <ReactModal
                                ariaHideApp={false}
                                parentSelector={() => {
                                    return this.ref.current
                                }}
                                data-mobile={mobile}
                                isOpen={isOpen}
                                onRequestClose={onRequestClose}
                                overlayClassName={styles.overlay}
                                className={styles.contentWrapper}
                            >
                                {withCloseButton ?
                                    <div className={styles.closeButtonWrapper}>
                                        <IconButton icon={<Close/>} className={styles.closeButton}
                                                    onClick={onRequestClose}/>
                                    </div> : null}
                                <div className={styles.content}>
                                    {children}
                                </div>
                            </ReactModal> : null}
                    </div>
                )}
            </TPAComponentsConsumer>
        );
    }
}
