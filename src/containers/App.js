import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar'
import store from '../store/index'
import Main from '../components/Main/Main'
import './App.css';
import _ from 'lodash';

function App() {
    const {contacts} = store.getState();
  return (
    <div className="App">
      <Sidebar contacts = {_.values(contacts)} />
      <Main />
    </div>
  );
}

export default App;
