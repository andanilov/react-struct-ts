import React from 'react';

interface ILableWrapper {  
  label: string,
  Element: React.ElementType,
  name?: string,
  error?: string,
}

const getRndNameInput : string = `input${String(Math.random()).slice(2)}${Date.now()}`;

const LableWrapper = ({ name = getRndNameInput, label, Element, error, ...options } : ILableWrapper) => (
  <div className="form-group my-3 input-group-lg">
    <label htmlFor={name} className="d-block">{label}</label>
    <Element name={name} error={error} {...options} />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

export default LableWrapper;
