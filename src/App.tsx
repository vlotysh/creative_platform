import React, {Component} from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";

interface State {
    show: any; //replace any with suitable type
}

class App extends Component<{}, State> {
    render() {
        return (
            <Router>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
