import React, {Component} from 'react';
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
    <Layout>
            <div className="App">
                        <div>
                            Creative platform <br/>
                            <Select values={choices} selected='lime' callback={(val) => console.log(val)}/>
                        </div>
                    <div>
                        <Tabs defaultIndex="1" onTabClick={console.log}>
                            <TabItem label="A" key="1" index="1">
                                Lorem ipsum
                            </TabItem>
                            <TabItem label="B" key="2" index="2">
                                Dolor sit amet
                            </TabItem>
                        </Tabs>
                    </div>
                    <div>
                        <FileDrop handleDrop={console.log}/>
                    </div>
                    <div>
                        <Main/>
                    </div>
                    <div>
                        <Clicker/>
                    </div>
                    <Modal>
                        <div>Modal 123</div>
                    </Modal>
                    <div>
                        <h1>Table</h1>
                        <MappedTable data={people} propertyNames={propertyNames} />
                    </div>
                    <Toggle>
                        <h3>Title</h3>
                        <div>Text</div>
                    </Toggle>
            </div>
        </Layout>
        )
    };
}

export default Home;