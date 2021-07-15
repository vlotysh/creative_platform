import React from 'react';
import avatar from './avatar.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={avatar} className="Avatar" alt="avatar" />
        <p>
          Creative platform
        </p>
      </header>
    </div>
  );
}

export default App;
