'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export const depositFunds = async (amount) => {
  const response = await fetch(`${baseUrl}/transactions/deposit`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify({ amount }),
  });

  revalidatePath('/dashboard');
};

export const withdrawFunds = async (amount) => {
  const response = await fetch(`${baseUrl}/transactions/withdraw`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify({ amount }),
  });

  revalidatePath('/dashboard');
};
