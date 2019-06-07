import React from 'react';
import './App.css';

import Checkout from './Checkout'

function App() {
  return (
    <div className="App">
     <h1> Hey you </h1>
     <Checkout
        name={'Delphe payment'}
        description={'One hour chat session'}
        amount={1}
      />
    </div>
  );
}

export default App;
