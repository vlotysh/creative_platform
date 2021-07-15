import React from 'react';
import avatar from './avatar.jpeg';
import './App.css';
import Select from "./Select";
import Tabs from "./Tabs";
import TabItem from "./TabItem";

function App() {
    let choices = [
        ['grapefruit', 'Grapefruit'],
        ['lime', 'Lime'],
        ['coconut', 'Coconut'],
        ['mango', 'Mango']
    ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="Avatar" alt="avatar" />
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
      </header>
    </div>
  );
}

export default App;
