import { FileDrop, MyInput, MyTextarea } from '@design-system';
import { zodResolver } from '@hookform/resolvers/zod';
import { HomeLayout } from '@layouts';
import { CreateContactData } from '@utils';
import clsx from 'clsx';
import React from 'react';
import { useForm, UseFormSetValue } from 'react-hook-form';
import * as z from 'zod';

const schema = z.object({
  Name: z.string().nonempty(),
  Email: z.string().email(),
  Company: z.string().optional().default('null'),
  Content: z.string().nonempty(),
  Deadline: z.string().nonempty(),
  Brief: z.string().optional().default('null'),
});

export interface ContactProps {}
const Contact: React.FC<ContactProps> = () => {
  const [message, setMessage] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
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
      <div className="flex flex-col items-center max-w-4xl py-8 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold">
            Hire me to help you realize your idea
          </h1>
          <p className="mt-2 text-primary-600 dark:text-primary-300">
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
                  <h1 className="text-xl font-normal">
                    Tell me about yourself
                  </h1>
                  <MyInput
                    register={register}
                    errors={errors?.Name}
                    type="text"
                    placeholder="What is you name"
                    name="Name"
                  />
                  <MyInput
                    register={register}
                    errors={errors?.Email}
                    type="text"
                    placeholder="What is you email"
                    name="Email"
                  />
                  <MyInput
                    register={register}
                    errors={errors?.Company}
                    type="text"
                    placeholder="Your company (Optional)"
                    name="Company"
                  />
                  <MyTextarea
                    register={register}
                    errors={errors?.Content}
                    placeholder="Tell me about your project"
                    name="Content"
                  />
                  <h1 className="text-xl font-normal">
                    What is your project's deadline
                  </h1>
                  <Selector
                    items={['1 Month', '3 Month', '6 Month', 'More']}
                    setValue={setValue}
                  />
                  <h1 className="text-xl font-normal">
                    Upload your project brief (Optional)
                  </h1>
                  <FileDrop setValue={setValue} field="Brief" />
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

export interface SelectorProps {
  items: string[];
  setValue: UseFormSetValue<CreateContactData>;
}
const Selector: React.FC<SelectorProps> = ({ items, setValue }) => {
  const [selected, setSelected] = React.useState('');
  const handlClick = (item: string) => {
    setSelected(item);
    setValue('Deadline', item);
  };
  return (
    <div className="flex justify-between space-x-2">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => handlClick(item)}
          className={clsx(
            'uppercase transition-all rounded-none px-4 py-2 text-sm border-2 text-primary-900 border-primary-900 dark:border-white dark:text-white dark:hover:text-white hover:bg-primary-900 hover:text-white dark:hover:bg-white dark:hover:text-primary-900 dark:hover:border-white ringify',
            selected === item
              ? 'dark:text-primary-900 dark:bg-white text-white bg-primary-900'
              : ''
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
