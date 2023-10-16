import {useState} from 'react';

export const useFormInputs = (initialState) => {
  const [input, setInput] = useState(initialState);

  const handleInputChange = (e) => {
    setInput({
      // ...input,
      [e.target.name]: e.target.value,
    })
  }

  const handleInputsReset = () => {
    setInput(initialState)
  }

  return [input, handleInputChange, handleInputsReset];
};
