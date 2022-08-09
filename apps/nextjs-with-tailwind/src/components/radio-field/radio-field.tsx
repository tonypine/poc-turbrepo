/* eslint-disable jsx-a11y/label-has-associated-control */
import { FC, PropsWithChildren } from 'react';

type Props = {
  value: any;
  name: string;
};

const RadioField: FC<PropsWithChildren<Props>> = ({
  children,
  value,
  name,
}) => (
  <div className="flex items-center">
    <input
      id={value}
      name={name}
      type="radio"
      className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
      value={value}
    />
    <label
      htmlFor={value}
      className="ml-3 block text-sm font-medium text-gray-700">
      {children}
    </label>
  </div>
);

export default RadioField;
