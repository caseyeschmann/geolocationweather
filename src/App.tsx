import React from 'react';
import './App.css';
import Coordinates from './ClassComponent';

// naming the arrow function & assigning our Functional Component
const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <div className="mainStyle">

      <Coordinates />

      </div>
    </div>
  );
}

export default App;
