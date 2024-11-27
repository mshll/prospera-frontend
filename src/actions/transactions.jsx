'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export const depositFunds = async (formData) => {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/transactions/deposit`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });

  revalidatePath('/dashboard');
};

export const withdrawFunds = async (formData) => {
  const userData = Object.fromEntries(formData);

  const response = await fetch(`${baseUrl}/transactions/withdraw`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify(userData),
  });

  revalidatePath('/dashboard');
};
