import { FC, PropsWithChildren } from 'react';

type Props = PropsWithChildren;

const Button: FC<Props> = ({ children }) => (
  <button
    type="button"
    className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto">
    {children}
  </button>
);

export default Button;
