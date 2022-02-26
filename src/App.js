import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

// Import our custom Chart.js file
import Chart from './components/Chart'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h2>Ayyyyyy</h2>
                </div>
                <Chart />
            </div>
        )
    }
}

export default App;
