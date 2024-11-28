'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export async function buyShares(amount, propertyId) {
  // const user = Object.fromEntries(formData);
  // console.log(propertyId, formData);

  const response = await fetch(`${baseUrl}/transactions/buy-share?propertyId=${propertyId}`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error(`Failed to buy shares: ${response.statusText}`);
  }

  revalidatePath('/dashboard');
  revalidatePath('/account');
  revalidatePath('/marketplace');
  return await response.json();
}

export async function sellShares(amount, propertyId) {
  const response = await fetch(`${baseUrl}/transactions/sell-share?propertyId=${propertyId}`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    throw new Error(`Failed to sell shares: ${response.statusText}`);
  }

  revalidatePath('/dashboard');
  revalidatePath('/account');
  revalidatePath('/marketplace');

  return await response.json();
}
