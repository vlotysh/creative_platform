import React, {Component} from "react";

class Toggle extends Component<any, any>{
    public constructor(props: any) {
        super(props);

        this.state = {
            show: false
        };
    }

    toggle = () => {
        this.setState({ show: !this.state.show });

    }

    render(): React.ReactNode {
        return <div
            onClick={this.toggle}
        >
            {this.state.show ? 'Hide' : 'Show'}
            <div className={this.state.show ? 'show' : 'hide'}>
                {this.props.children}
            </div>

        </div>;
    }

}

export default Toggle;