import { FormEvent, Fragment, FunctionComponent } from "react";

interface ButtonProps {
  children: string;
  onSubmit: (e: FormEvent) => void;
}

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  onSubmit,
}) => {
  return (
    <Fragment>
      <button
        className="border bg-black hover:bg-white text-white hover:text-black p-4 transition duration-200 ease-in-out w-full rounded-md shadow-md"
        onClick={onSubmit}
      >
        {children}
      </button>
    </Fragment>
  );
};
