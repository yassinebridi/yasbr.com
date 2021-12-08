import { MyInput } from '@design-system';
import { CheckIcon, ExclamationIcon } from '@heroicons/react/outline';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { SubscribeData } from '@utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export interface SubscribeProps {}
const Subscribe: React.FC<SubscribeProps> = () => {
  const [state, setState] =
    React.useState<'LOADING' | 'IDLE' | 'ERROR' | 'SUCCESS'>('IDLE');
  const [errorMessage, setErrorMessage] = React.useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SubscribeData>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: SubscribeData) => {
    setState('LOADING');
    setErrorMessage(null);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'post',
        body: JSON.stringify({ email: data.email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const resJson = await res.json();
      if (resJson.error === null) {
        setState('SUCCESS');
        reset();
      } else {
        throw resJson.error;
      }
    } catch (e) {
      setErrorMessage(e);
      setState('ERROR');
    }
  };

  return (
    <div className="p-6 border-2 border-dashed dark:border-primary-700 border-primary-200">
      <h2 className="text-2xl font-bold text-center">
        Subscribe to my newsletter
      </h2>
      <p className="mt-2 text-sm text-center dark:text-primary-400 text-primary-600">
        You like what you just read?
        <br />
        Subscribe and get interesting software development content like this
        right in you inbox.
      </p>
      <form
        className="flex flex-col items-start mt-4 sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <MyInput
          register={register}
          errors={errors?.email}
          type="text"
          placeholder="Your Email"
          cn="w-full"
          name="email"
        />
        <button
          type="submit"
          disabled={state === 'LOADING'}
          className="w-full btn sm:w-auto btn-md btn-primary ringify"
        >
          {state === 'LOADING' ? 'Subscribing..' : 'Subscribe'}
        </button>
      </form>
      {state === 'ERROR' && (
        <div className="flex items-center mt-2 text-red-500 space-x-1">
          <ExclamationIcon className="w-5 h-5" />
          <p className="px-1">{errorMessage}</p>
        </div>
      )}
      {state === 'SUCCESS' && (
        <div className="flex items-center mt-2 text-green-500 space-x-1">
          <CheckIcon className="w-5 h-5" />
          <p className="px-1">Subscribed successfully</p>
        </div>
      )}
    </div>
  );
};

export default Subscribe;
