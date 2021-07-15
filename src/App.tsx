import React from 'react';
import avatar from './avatar.jpeg';
import './App.css';
import Select from "./Select";

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
      </header>
    </div>
  );
}

export default App;
