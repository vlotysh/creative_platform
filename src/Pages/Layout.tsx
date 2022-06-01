import React, {Component} from 'react';
import avatar from "../avatar.jpeg";
import { NavLink as Link } from "react-router-dom";

interface ILayoutProps {
    title?: string,
    children: any

}

export default class Layout extends Component<ILayoutProps, ILayoutProps> {
    componentDidMount() {
        document.title = this.props.title ?? 'Creative platform';
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={avatar} className="Avatar" alt="avatar"/>
                    <nav>
                        <Link to="/">Home</Link>{" "}
                        <Link to="/about">About</Link>
                    </nav>
                </header>
                <div className="App-body">
                    {this.props.children}
                </div>
            </div>
        )
    };
}