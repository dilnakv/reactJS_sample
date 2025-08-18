import { forwardRef } from "react";

type InputFieldProps = {
  placeholder?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (props , ref) => {
    return <input ref={ref} placeholder={props.placeholder} {...props} />;
  }
);


export default InputField;
