import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal(props: any) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {props.children}
                <button type="button" onClick={props.handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
}
export default Modal;