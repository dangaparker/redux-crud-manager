import './modal.css';
import React, { Component } from 'react';
import { MdClose as CloseIcon } from 'react-icons/md';

class Modal extends Component {
    render() {
        const {
            children,
            close,
            style,
            title,
            name
        } = this.props;
        return (
            <div className="crud-modal">
                <div className="content"
                    style={style}
                >
                    <div className="title" name={name}>
                        {title}
                        <CloseIcon size="36"
                            onClick={close}
                        />
                    </div>
                    <div className="body">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
