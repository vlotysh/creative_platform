import React, {Component} from 'react';
import avatar from './avatar.jpeg';
import './App.scss';
import Select from "./Select";
import Tabs from "./Tabs";
import TabItem from "./TabItem";
import FileDrop from "./FileDrop";
import Clicker from "./Clicker";
import Main from "./Modal";
import Modal from "./Component/Modal/Modal";
import MappedTable from "./Component/Table/MappedTable";

interface State {
    show: any; //replace any with suitable type
}

class App extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        let choices = [
            ['grapefruit', 'Grapefruit'],
            ['lime', 'Lime'],
            ['coconut', 'Coconut'],
            ['mango', 'Mango']
        ];

        const people = [
            { name: 'John', surname: 'Smith', age: 42 },
            { name: 'Adam', surname: 'Smith', gender: 'male' }
        ];
        const propertyNames = ['name', 'surname', 'age'];

        return (
            <div className="App">
                <header className="App-header">
                    <img src={avatar} className="Avatar" alt="avatar"/>
                    <p>
                        Creative platform <br/>
                        <Select values={choices} selected='lime' callback={(val) => console.log(val)}/>
                    </p>
                    <p>
                        <Tabs defaultIndex="1" onTabClick={console.log}>
                            <TabItem label="A" index="1">
                                Lorem ipsum
                            </TabItem>
                            <TabItem label="B" index="2">
                                Dolor sit amet
                            </TabItem>
                        </Tabs>
                    </p>
                    <p>
                        <FileDrop handleDrop={console.log}/>
                    </p>
                    <p>
                        <Main/>
                    </p>
                    <p>
                        <Clicker/>
                    </p>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <p>Modal 123</p>
                    </Modal>

                    <button type="button" onClick={this.showModal}>
                        Open
                    </button>
                    <p>
                        <h1>Table</h1>
                        <MappedTable data={people} propertyNames={propertyNames} />
                    </p>
                </header>
            </div>
        )
    };
}

export default App;
