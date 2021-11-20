import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import './css/App.css';
import patientRoutes from './components/routes/patients';
import NavBar from './components/NavBar';


// sets up routing outside of app
const routes = patientRoutes();

class App extends Component {

    render() {
        return (
            <Router>
                <div id="App">
                    <NavBar />
                    <div id="App-body">
                    </div>
                </div>
                {routes}
            </Router>
        );
    }
}

export default App;
