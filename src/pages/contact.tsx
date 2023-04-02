import { MyInput, MyTextarea } from '@design-system';
import { zodResolver } from '@hookform/resolvers/zod';
import { HomeLayout } from '@layouts';
import { CreateContactData } from '@utils';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

const schema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
  number: z.string(),
});

export interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  const [message, setMessage] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateContactData>({
    reValidateMode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: CreateContactData) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/create-contact', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      if (res.ok) {
        setMessage(true);
      }
    } catch (error) {
      console.log('error: ', error);
    }
    setIsLoading(false);
  };
  return (
    <HomeLayout>
      <div className="flex flex-col items-center max-w-4xl px-4 py-8 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-bold text-center sm:text-3xl">
            Hire me to help you realize your idea
          </h1>
          <p className="mt-2 text-sm text-primary-600 dark:text-primary-300 sm:text-lg">
            Let's get in touch today, I'm excited to hear from you!
          </p>
        </div>
        <div className="w-full max-w-md py-8 mx-auto">
          {message ? (
            <p className="p-4 text-center border-2 border-dashed dark:text-primary-300 text-primary-800 dark:bg-primary-800 dark:border-primary-600 border-primary-300 bg-primary-50">
              I just got your message, i will get back to you as soon as
              possible.
            </p>
          ) : (
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col w-full space-y-4">
                  <h1 className="font-normal text-center sm:text-left text-md sm:text-xl">
                    Tell me about yourself
                  </h1>
                  <MyInput
                    register={register}
                    errors={errors?.name}
                    type="text"
                    placeholder="What is you name"
                    name="name"
                  />
                  <MyInput
                    register={register}
                    errors={errors?.email}
                    type="text"
                    placeholder="What is you email"
                    name="email"
                  />
                  <MyTextarea
                    register={register}
                    errors={errors?.message}
                    placeholder="What is your message"
                    name="message"
                    rows={5}
                  />
                  <MyInput
                    register={register}
                    errors={errors?.number}
                    type="text"
                    placeholder="What is you phone number(optional)"
                    name="number"
                  />
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary ringify"
                  >
                    {isLoading ? (
                      <span>Submitting..</span>
                    ) : (
                      <span>Submit</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </HomeLayout>
  );
};

export default Contact;
