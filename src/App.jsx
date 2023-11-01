import React, {useState} from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';



function App() {
  const [formDatas, setFormDatas] = useState({
    initialInvestment: 1000,
    annualInvestment: 200,
    expectedReturn: 5,
    duration: 12,
  });

  const inputIsValid = formDatas.duration >= 1;

  const inputChangeHandler = (identifier, newValue) => {
    setFormDatas({
      ...formDatas,
      [identifier]: +newValue,
    });
  };

  return (
    <div>
      <Header />
      <Form onChange={inputChangeHandler} formDatas={formDatas}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
      {inputIsValid && <Results input={formDatas}/>}
    </div>
  )
}

export default App;
