import React from 'react';
import './App.css';
import { APIClient } from './APIClient';
import { CurrentTabWebClient } from './Utils/CurrentTabWebClient';

const App: React.FC = () => {
  let webClient = new CurrentTabWebClient()
  return (
    <div className="App">
      <APIClient WebClient={webClient} ></APIClient>
    </div>
  );
}

export default App;
