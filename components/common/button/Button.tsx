import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Button = ({ children, className = 'my-6' }: Props) => (
  <button
    type="button"
    className={classNames(
      'font-medium bg-suave-blue text-white px-7 py-3 text-xs rounded-full font-poppins',
      className
    )}
  >
    {children}
  </button>
);
