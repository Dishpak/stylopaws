import { useState } from 'react';

export const useFormInputs = (initialState) => {
  const [input, setInput] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrorMessage('');
  };

  const handleInputsReset = () => {
    setInput(initialState);
    setErrorMessage('');
  };

  return [
    input,
    handleInputChange,
    handleInputsReset,
    errorMessage,
    setErrorMessage,
  ];
};
