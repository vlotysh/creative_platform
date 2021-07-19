import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    private el: any;

    constructor(props: any) {
        super(props);
        this.el = document.createElement('div');
    }

    componentDidMount() {
        // The portal element is inserted in the DOM tree after
        // the Modal's children are mounted, meaning that children
        // will be mounted on a detached DOM node. If a child
        // component requires to be attached to the DOM tree
        // immediately when mounted, for example to measure a
        // DOM node, or uses 'autoFocus' in a descendant, add
        // state to Modal and only render the children when Modal
        // is inserted in the DOM tree.
        // @ts-ignore
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        // @ts-ignore
        modalRoot.appendChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        );
    }
}
class Main extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // This will fire when the button in Child is clicked,
        // updating Parent's state, even though button
        // is not direct descendant in the DOM.
        this.setState(state => ({
            // @ts-ignore
            clicks: state.clicks + 1
        }));
    }

    render() {
        // @ts-ignore
        let clickCount = this.state.clicks;
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks: {clickCount}</p>
                <p>
                    Open up the browser DevTools
                    to observe that the button
                    is not a child of the div
                    with the onClick handler.
                </p>
                <Modal>
                    <Child />
                </Modal>
                <div id="modal-root"></div>
            </div>
        );
    }
}

function Child() {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
        <div className="modal">
            <button>Click</button>
        </div>
    );
}

export default Main;