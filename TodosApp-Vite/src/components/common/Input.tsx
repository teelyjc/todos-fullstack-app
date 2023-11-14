import { ChangeEvent, Fragment, FunctionComponent } from "react";

interface InputProps {
  type: "text" | "password";
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: FunctionComponent<InputProps> = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <Fragment>
      <input
        className="border rounded-md shadow-md py-2 px-4"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Fragment>
  );
};
