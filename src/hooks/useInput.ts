import { useState } from 'react';

type InputState = string | object | object[];

interface IInputCntrl {
  inline: {
    value: InputState,
    error: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  },
  setError: (value: string) => string,
};

type UseInput = (defaultValue: InputState) => IInputCntrl;

// --
// -- useInput
export default function <UseInput>(defaultValue = '') : IInputCntrl {
  const [value, setValue] = useState(defaultValue);
  const [error, setErrorValue] = useState('');

  return {
    inline: {
      value,
      error,
      onChange: (event) => event.target instanceof HTMLInputElement && setValue(event.target.value),
    },
    setError: (value) => {
      setErrorValue(value);
      return value;
    },
  };
}
