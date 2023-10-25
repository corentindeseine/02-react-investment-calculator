import React from 'react';

import Header from './components/Header';
import Form from './components/Form';


function App() {
  const saveDatas = (userInputs) => {
    console.log(userInputs)
  }

  return (
    <div>
      <Header />
      <Form onSaveDatas={saveDatas}/>
    </div>
  )
}

export default App;
