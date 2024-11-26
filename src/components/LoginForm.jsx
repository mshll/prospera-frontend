'use client';

// import { login } from '@/actions/auth';
import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { LoaderCircle } from 'lucide-react';
import { redirect, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import * as z from 'zod';

const formSchema = z.object({
  username: z
    .string({
      required_error: 'Username is required.',
    })
    .min(3, {
      message: 'Username must be at least 3 characters.',
    }),

  password: z
    .string({
      required_error: 'Password is required.',
    })
    .min(4, {
      message: 'Password must be at least 4 characters.',
    }),
});

function LoginForm() {
  const [values, setValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect') || '/dashboard';

  return (
    <>
      <AutoForm
        onSubmit={(data) => {
          // setIsLoading(true);
          // const promise = login(data);
          // toast.promise(promise, {
          //   loading: 'Logging in...',
          // });
          // promise.then((res) => {
          //   setIsLoading(false);
          //   if (!res) {
          //     toast.error('Username or password is incorrect, please try again.');
          //     setValues({
          //       ...values,
          //       password: '',
          //     });
          //   } else {
          //     toast.success('Logged in successfully.');
          //     redirect(redirectUrl);
          //   }
          // });
        }}
        values={values}
        onValuesChange={setValues}
        className={'min-w-[20rem]'}
        formSchema={formSchema}
        fieldConfig={{
          password: {
            inputProps: {
              type: 'password',
              placeholder: '••••••••',
            },
          },
          username: {
            inputProps: {
              placeholder: 'e.g. awesome_user',
            },
          },
        }}
      >
        <AutoFormSubmit className={'w-full'} disabled={isLoading}>
          {isLoading ? <LoaderCircle className='h-6 w-6 animate-spin' /> : 'Log In'}
        </AutoFormSubmit>
      </AutoForm>
    </>
  );
}

export default LoginForm;
