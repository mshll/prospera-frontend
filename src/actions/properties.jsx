'use server';

import { revalidatePath } from 'next/cache';
import { baseUrl, getHeaders } from './config';

export const getAllProperties = async () => {
  const response = await fetch(`${baseUrl}/properties/view`, {
    method: 'GET',
    headers: await getHeaders(),
    // cache: 'no-cache',
  });
  const properties = await response.json();
  return properties;
};

export const viewAllInvestments = async () => {
  const response = await fetch(`${baseUrl}/investments/view`, {
    method: 'GET',
    headers: await getHeaders(),
  });
  const properties = await response.json();
  return properties;
};

export const likeProperty = async (propertyId) => {
  const response = await fetch(`${baseUrl}/users/like/${propertyId}`, {
    method: 'POST',
    headers: await getHeaders(),
  });
  revalidatePath('/dashboard');
  revalidatePath('/account');
  revalidatePath('/marketplace');
};

export const unlikeProperty = async (propertyId) => {
  const response = await fetch(`${baseUrl}/users/unlike/${propertyId}`, {
    method: 'POST',
    headers: await getHeaders(),
  });
  revalidatePath('/dashboard');
  revalidatePath('/account');
  revalidatePath('/marketplace');
};
