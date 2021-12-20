import React, {Component} from 'react';
import './Modal.css';
import ModelView from "./ModalView";

interface State {
    show: boolean; //replace any with suitable type
}

class Modal extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: false
        };
        this.toggleShow = this.toggleShow.bind(this);
    }

    toggleShow = () => {
        this.setState({ show: !this.state.show });
    };

    render() {
        const showHideClassName = this.state.show ? "modal display-block" : "modal display-none";

        return <ModelView showHideClassName={showHideClassName} children={this.props.children} closeHandler={this.toggleShow}/>
    }
}
export default Modal;