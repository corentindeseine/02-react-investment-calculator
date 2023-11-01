import React, {useState} from "react";

const Form = ({onChange, formDatas}) => {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment ($)</label>
          <input
            type="number"
            min='0'
            value={formDatas.initialInvestment}
            onChange={ (event) => onChange('initialInvestment', event.target.value) }
          />
        </p>
        <p>
          <label>Annual investment ($)</label>
          <input
            type="number"
            min='1'
            value={formDatas.annualInvestment}
            onChange={ (event) => onChange('annualInvestment', event.target.value) }
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
            onChange={ (event) => onChange('expectedReturn', event.target.value) }
          />
        </p>
        <p>
          <label>Duration (months)</label>
          <input
            type="number"
            value={formDatas.duration}
            min="1"
            step="1"
            onChange={ (event) => onChange('duration', event.target.value) }
          />
        </p>
      </div>
    </section>
  )
}

export default Form;
