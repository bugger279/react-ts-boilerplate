import React, {ComponentProps, forwardRef} from "react";
import {FieldError} from "../../utils/Forms";

interface InputProps extends ComponentProps<"input"> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {label, type = "text", ...props},
  ref
) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} ref={ref} {...props} />
      <FieldError name={props.name} />
    </div>
  );
});
