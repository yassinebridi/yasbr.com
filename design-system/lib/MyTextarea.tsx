import clsx from 'clsx';
import React, { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';

type MyTextareaProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: any;
};

const MyTextarea: FC<MyTextareaProps> = ({
  name,
  errors,
  label,
  placeholder,
  register,
  ...props
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="mb-2 text-sm text-primary-600 dark:text-primary-300"
        >
          {label}
        </label>
      )}
      <div className="flex flex-col space-y-2">
        <textarea
          placeholder={placeholder}
          className={clsx(
            'px-4 py-2 dark:text-primary-300 dark:bg-primary-800 text-primary-800 transition rounded-none focus:outline-none focus:ring-2 dark:ring-offset-primary-900 ring-offset-white focus:ring-offset-4',
            errors
              ? 'dark:bg-[#462a2a] bg-red-100 ring-red-300 placeholder-[#a56565] '
              : 'bg-primary-200 dark:ring-white ring-black placeholder-primary-500 '
          )}
          {...register(name, { required: true })}
          {...props}
        />
        {errors && (
          <span className="px-1 text-sm text-red-500">{errors?.message}</span>
        )}
      </div>
    </div>
  );
};

export default MyTextarea;
