import React from 'react';
import { HashRouter as Router} from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import { Routes } from './routes';
import './App.css';

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert />
            <Routes />
          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
);

export default App;
