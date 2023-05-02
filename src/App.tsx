import React from 'react';
import Calories from './components/Calories';
import Kilometers from './components/Kilometers';
import Form from './components/Form';
import Weight from './components/Weight';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="app">
      <div className="display">
        <Calories/>
        <Kilometers/>
      </div>
      <div className="input">
        <Form/>
        <Weight/>
      </div>
      <div>
        <ItemList/>
      </div>
    </div>
  );
}

export default App;
