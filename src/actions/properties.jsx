'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export const getAllProperties = async () => {
  const response = await fetch(`${baseUrl}/properties/view`, {
    method: 'GET',
    headers: await getHeaders(),
  });
  const properties = await response.json();
  return properties;
};
