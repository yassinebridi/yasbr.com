import clsx from 'clsx';
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Backdrop = React.forwardRef<HTMLDivElement, Props>(function Backdrop(
  props,
  ref
) {
  const { className, ...other } = props;

  const baseStyle =
    'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center';

  const cls = clsx(baseStyle, className);
  return <div className={cls} ref={ref} {...other}></div>;
});

export default Backdrop;
