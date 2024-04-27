import { useState } from "react";

export const useForm = (initialState) => {
  const [formState, setFormState] = useState(initialState);

  const inputHandler = (id, value, isValid) => {
    setFormState((prevState) => ({
      ...prevState,
      [id]: {
        value: value,
        isValid: isValid,
      },
    }));
  };

  const resetForm = () => {
    setFormState(initialState);
  };

  return [formState, inputHandler, resetForm];
};
