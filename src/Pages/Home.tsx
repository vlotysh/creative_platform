import React, {Component} from 'react';
import avatar from "../avatar.jpeg";
import Select from "../Select";
import Tabs from "../Tabs";
import TabItem from "../TabItem";
import FileDrop from "../FileDrop";
import Main from "../Modal";
import Clicker from "../Clicker";
import Modal from "../Component/Modal/Modal";
import MappedTable from "../Component/Table/MappedTable";
import Toggle from "../Component/Toogle/Toggle";
import Layout from "./Layout";

interface State {
    show: any; //replace any with suitable type
}

class Home extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            show: false
        };
    }

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
    <Layout title="Home">
            <div className="App">
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
                    <Modal>
                        <p>Modal 123</p>
                    </Modal>
                    <p>
                        <h1>Table</h1>
                        <MappedTable data={people} propertyNames={propertyNames} />
                    </p>
                    <Toggle>
                        <h3>Title</h3>
                        <p>Text</p>
                    </Toggle>
            </div>
        </Layout>
        )
    };
}

export default Home;