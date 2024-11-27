'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { baseUrl, getHeaders } from './config';
import { deleteToken, setToken } from './token';

export async function login(data) {
  try {
    const response = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: await getHeaders(),
      body: JSON.stringify(data),
    });
    const { token } = await response.json();
    if (!token) return false;
    await setToken(token);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function register(data) {
  console.log(data);

  try {
    const response = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: await getHeaders({ auth: false }),
      body: JSON.stringify(data),
    });

    console.log(response);

    const { token } = await response.json();
    if (!token) return false;
    await setToken(token);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  await deleteToken();
  redirect('/');
}
