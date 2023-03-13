import { Fragment } from "react";

export const Input = ({
  type,
  register,
  name,
  value,
  errors,
  placeholder,
    required,
  ...rest
}) => {
  return (
    <Fragment>
      <input
        type={type}
        name={name}
        id={name}
        defaultValue={value}
        {...register(name)}
        {...rest}
        className={`form-control ${errors[name] ? "is-invalid" : ""}`}
        placeholder={placeholder}
        readOnly={required}
      />
      <div className="invalid-feedback">{errors[name]?.message}</div>
    </Fragment>
  );
};
