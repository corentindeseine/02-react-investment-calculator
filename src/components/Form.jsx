import React, {useState} from "react";

const Form = (props) => {
  const [formDatas, setFormDatas] = useState({
    investment: 1000,
    annualInvestment: 200,
    expectedReturn: 5.0,
    duration: 12,
  });


  const inputChangeHandler = (identifier, newValue) => {
    setFormDatas({
      ...formDatas,
      [identifier]: identifier === "expectedReturn" ? newValue : parseInt(newValue),
    });
  };

  props.onSaveDatas(formDatas);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment ($)</label>
          <input
            type="number"
            min='0'
            value={formDatas.investment}
            onChange={ (event) => inputChangeHandler('investment', event.target.value) }
          />
        </p>
        <p>
          <label>Annual investment ($)</label>
          <input
            type="number"
            min='1'
            value={formDatas.annualInvestment}
            onChange={ (event) => inputChangeHandler('annualInvestment', event.target.value) }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            step="0.1"
            min='0.1'
            value={formDatas.expectedReturn}
            onChange={ (event) => inputChangeHandler('expectedReturn', event.target.value) }
          />
        </p>
        <p>
          <label>Duration (months)</label>
          <input
            type="number"
            value={formDatas.duration}
            min="1"
            step="1"
            onChange={ (event) => inputChangeHandler('duration', event.target.value) }
          />
        </p>
      </div>
    </section>
  )
}

export default Form;
