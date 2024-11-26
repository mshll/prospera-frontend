'use client';

// import { register } from '@/actions/auth';
import AutoForm, { AutoFormSubmit } from '@/components/ui/auto-form';
import { LoaderCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import * as z from 'zod';
import { DependencyType } from './ui/auto-form/types';
import clsx from 'clsx';

const MAX_FILE_SIZE = 25000000;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

const formSchema = z
  .object({
    image: z
      .any()
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Please upload a valid image file (jpeg, jpg, png, webp).',
      )
      .refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is ${MAX_FILE_SIZE / 1000000}MB.`)
      .optional()
      .describe('Update profile image'),

    firstName: z
      .string({
        required_error: 'First name is required.',
      })
      .min(3, {
        message: 'First name must be at least 1 character.',
      }),

    lastName: z
      .string({
        required_error: 'Last name is required.',
      })
      .min(3, {
        message: 'Last name must be at least 1 character.',
      }),

    username: z.string().optional(),

    email: z
      .string({
        required_error: 'Email is required.',
      })
      .email({
        message: 'Please enter a valid email address.',
      }),

    password: z
      .string({
        required_error: 'Password is required.',
      })
      .min(8, {
        message: 'Password must be at least 8 characters.',
      }),

    confirm: z
      .string({
        required_error: 'Confirm password is required.',
      })
      .min(8, {
        message: 'Confirm password must be at least 8 characters.',
      })
      .describe('Confirm password.'),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Passwords do not match.',
    path: ['confirm'],
  });

function UpdateProfileForm({ className }) {
  const [values, setValues] = useState({
    // TODO - Add initial values from user data
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    username: 'awesome_user',
    password: '',
    confirm: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // flsfh
  const elementRef = useRef(null);

  useEffect(() => {
    // const element = elementRef.current;
    // if (element) {
    //   // Move the element to the desired location
    //   const parent = document.getElementById('names-parent');
    //   if (parent) {
    //     parent.appendChild(element);
    //     element.classList.remove('hidden');
    //   }
    // }
  }, []);

  return (
    <AutoForm
      onSubmit={(data) => {
        // setIsLoading(true);
        // const promise = register(data);
        // toast.promise(promise, {
        //   loading: 'Registering...',
        // });
        // promise.then((res) => {
        //   setIsLoading(false);
        //   if (!res) {
        //     toast.error('An error occurred, please try again.');
        //     setValues({
        //       ...values,
        //       password: '',
        //       confirm: '',
        //     });
        //   } else {
        //     toast.success('Registered successfully.');
        //     redirect('/dashboard');
        //   }
        // });
      }}
      values={values}
      onValuesChange={setValues}
      className={clsx('min-w-[10rem]', className)}
      formSchema={formSchema}
      fieldConfig={{
        password: {
          inputProps: {
            type: 'password',
            placeholder: '••••••••',
          },
        },
        confirm: {
          inputProps: {
            type: 'password',
            placeholder: '••••••••',
          },
        },
        username: {
          inputProps: {
            placeholder: 'e.g. awesome_user',
            readOnly: true,
          },
        },
        email: {
          inputProps: {
            required: true,
            placeholder: 'e.g. johndoe@gmail.com',
          },
        },
        image: {
          fieldType: 'file',
          inputProps: {
            accept: 'image/*',
          },
        },
        firstName: {
          inputProps: {
            required: true,
            placeholder: 'e.g. John',
          },
          halfWidth: true,
        },
        lastName: {
          inputProps: {
            required: true,
            placeholder: 'e.g. Doe',
          },
          halfWidth: true,
        },
      }}
      dependencies={[
        {
          sourceField: 'password',
          type: DependencyType.HIDES,
          targetField: 'confirm',
          when: (value) => !value,
        },
      ]}
    >
      <div className='flex justify-end'>
        <AutoFormSubmit className={''} disabled={isLoading}>
          {isLoading ? <LoaderCircle className='h-6 w-6 animate-spin' /> : 'Update Profile'}
        </AutoFormSubmit>
      </div>
    </AutoForm>
  );
}

export default UpdateProfileForm;
