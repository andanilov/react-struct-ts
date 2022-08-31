import React from 'react';

interface IInput {
  type?: string,
  value?: string,
  name?: string,
  error?: string,
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Input = ({ type, value, onChange, name, error, ...rest } : IInput) => (
  <input
    name={name}
    type={type || 'text'}
    value={value}
    onChange={onChange}
    className={`form-control ${error ? 'is-invalid' : ''}`}
    {...rest}
  />);

export default Input;
