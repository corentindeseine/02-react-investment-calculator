import React from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';



function App() {
  const saveDatas = (userInputs) => {
    console.log(userInputs)
  }

  return (
    <div>
      <Header />
      <Form onSaveDatas={saveDatas}/>
      <Results />
    </div>
  )
}

export default App;
