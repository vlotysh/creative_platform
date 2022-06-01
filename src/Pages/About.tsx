import React, {Component} from 'react';
import Layout from "./Layout";

interface State {
    show: any; //replace any with suitable type
}

class About extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: false
        };
    }

    render() {
        return (
            <Layout title="About">
                <div className="App">
                    About
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                1 of 2
                            </div>
                            <div className="col">
                                2 of 2
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                1 of 3
                            </div>
                            <div className="col">
                                2 of 3
                            </div>
                            <div className="col">
                                3 of 3
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    };
}

export default About;