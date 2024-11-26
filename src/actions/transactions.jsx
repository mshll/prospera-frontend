'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export const myTransactions = async () => {
  const transactions = [
    { id: 1, type: 'deposit', amount: 1000, createdAt: '2023-10-01T10:00:00Z' },
    { id: 2, type: 'buy shares', amount: -500, createdAt: '2023-10-02T11:00:00Z' },
    { id: 3, type: 'sell shares', amount: 700, createdAt: '2023-10-03T12:00:00Z' },
    { id: 4, type: 'withdraw', amount: -300, createdAt: '2023-10-04T13:00:00Z' },
    { id: 5, type: 'deposit', amount: 1200, createdAt: '2023-10-05T14:00:00Z' },
    { id: 6, type: 'buy shares', amount: -450, createdAt: '2023-10-06T15:00:00Z' },
    { id: 7, type: 'sell shares', amount: 800, createdAt: '2023-10-07T16:00:00Z' },
    { id: 8, type: 'withdraw', amount: -200, createdAt: '2023-10-08T17:00:00Z' },
    { id: 9, type: 'deposit', amount: 1500, createdAt: '2023-10-09T18:00:00Z' },
    { id: 10, type: 'buy shares', amount: -600, createdAt: '2023-10-10T19:00:00Z' },
    { id: 1, type: 'deposit', amount: 1000, createdAt: '2023-10-01T10:00:00Z' },
    { id: 2, type: 'buy shares', amount: -500, createdAt: '2023-10-02T11:00:00Z' },
    { id: 3, type: 'sell shares', amount: 700, createdAt: '2023-10-03T12:00:00Z' },
    { id: 4, type: 'withdraw', amount: -300, createdAt: '2023-10-04T13:00:00Z' },
    { id: 5, type: 'deposit', amount: 1200, createdAt: '2023-10-05T14:00:00Z' },
    { id: 6, type: 'buy shares', amount: -450, createdAt: '2023-10-06T15:00:00Z' },
    { id: 7, type: 'sell shares', amount: 800, createdAt: '2023-10-07T16:00:00Z' },
    { id: 8, type: 'withdraw', amount: -200, createdAt: '2023-10-08T17:00:00Z' },
    { id: 9, type: 'deposit', amount: 1500, createdAt: '2023-10-09T18:00:00Z' },
    { id: 10, type: 'buy shares', amount: -600, createdAt: '2023-10-10T19:00:00Z' },
    { id: 1, type: 'deposit', amount: 1000, createdAt: '2023-10-01T10:00:00Z' },
    { id: 2, type: 'buy shares', amount: -500, createdAt: '2023-10-02T11:00:00Z' },
    { id: 3, type: 'sell shares', amount: 700, createdAt: '2023-10-03T12:00:00Z' },
    { id: 4, type: 'withdraw', amount: -300, createdAt: '2023-10-04T13:00:00Z' },
    { id: 5, type: 'deposit', amount: 1200, createdAt: '2023-10-05T14:00:00Z' },
    { id: 6, type: 'buy shares', amount: -450, createdAt: '2023-10-06T15:00:00Z' },
    { id: 7, type: 'sell shares', amount: 800, createdAt: '2023-10-07T16:00:00Z' },
    { id: 8, type: 'withdraw', amount: -200, createdAt: '2023-10-08T17:00:00Z' },
    { id: 9, type: 'deposit', amount: 1500, createdAt: '2023-10-09T18:00:00Z' },
    { id: 10, type: 'buy shares', amount: -600, createdAt: '2023-10-10T19:00:00Z' },
    { id: 1, type: 'deposit', amount: 1000, createdAt: '2023-10-01T10:00:00Z' },
    { id: 2, type: 'buy shares', amount: -500, createdAt: '2023-10-02T11:00:00Z' },
    { id: 3, type: 'sell shares', amount: 700, createdAt: '2023-10-03T12:00:00Z' },
    { id: 4, type: 'withdraw', amount: -300, createdAt: '2023-10-04T13:00:00Z' },
    { id: 5, type: 'deposit', amount: 1200, createdAt: '2023-10-05T14:00:00Z' },
    { id: 6, type: 'buy shares', amount: -450, createdAt: '2023-10-06T15:00:00Z' },
    { id: 7, type: 'sell shares', amount: 800, createdAt: '2023-10-07T16:00:00Z' },
    { id: 8, type: 'withdraw', amount: -200, createdAt: '2023-10-08T17:00:00Z' },
    { id: 9, type: 'deposit', amount: 1500, createdAt: '2023-10-09T18:00:00Z' },
    { id: 10, type: 'buy shares', amount: -600, createdAt: '2023-10-10T19:00:00Z' },
  ];
  return transactions;
};

export const depositMoney = async (formData) => {
  const userData = Object.fromEntries(formData);

  try {
    const response = await fetch(`${baseUrl}/mini-project/api/transactions/deposit`, {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(userData),
    });

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/transactions');
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const withdrawMoney = async (formData) => {
  const userData = Object.fromEntries(formData);

  try {
    const response = await fetch(`${baseUrl}/mini-project/api/transactions/withdraw`, {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(userData),
    });

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/transactions');
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const transfer = async (formData, username) => {
  const userData = Object.fromEntries(formData);

  try {
    const response = await fetch(`${baseUrl}/mini-project/api/transactions/transfer/${username}`, {
      method: 'PUT',
      headers: await getHeaders(),
      body: JSON.stringify(userData),
    });

    revalidatePath('/dashboard');
    revalidatePath('/dashboard/transactions');
    revalidatePath('/users');
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
};
