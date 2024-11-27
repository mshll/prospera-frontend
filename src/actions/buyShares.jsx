'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export async function buyShares(formData, propertyId) {
  const user = Object.fromEntries(formData);

  console.log(propertyId, formData);

  const response = await fetch(`${baseUrl}/transactions/buy-share?propertyId=${propertyId}`, {
    method: 'POST',
    headers: await getHeaders(),
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error(`Failed to buy shares: ${response.statusText}`);
  }

  return await response.json();
}
