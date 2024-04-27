import { useEffect, useState } from "react";
import { validate } from "../../util/validators";

import "./Input.css";

const Input = (props) => {
  const {
    id,
    element,
    type,
    label,
    validators,
    placeholder,
    errorText,
    onInput,
    value,
  } = props;
  const [isValid, setIsValid] = useState(false);
  const [touched, setTouched] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (touched) {
      setIsValid(validate(value, validators));
    }
  }, [value, validators, touched]);

  useEffect(() => {
    // Resetează touched dacă input-ul primește focus și a fost resetat
    if (focused && value === "") {
      setTouched(false);
    }
  }, [focused, value]);

  const changeHandler = (event) => {
    const { value } = event.target;
    setIsValid(validate(value, validators));
    onInput(id, value, validate(value, validators));
  };

  const blurHandler = () => {
    setTouched(true);
  };

  const focusHandler = () => {
    setFocused(true);
  };

  return (
    <div
      className={`form-control ${
        !isValid && touched && "form-control--invalid"
      }`}
    >
      <div className="flex justify-between items-center text-[12px] font-roboto-b">
        <label htmlFor={id}>{label}</label>
        {!isValid && touched && <p>{errorText}</p>}
      </div>
      {element === "input" && (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={changeHandler}
          onBlur={blurHandler}
          onFocus={focusHandler}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
