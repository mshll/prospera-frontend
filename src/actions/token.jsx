import 'server-only';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function setToken(token) {
  const cookieStore = await cookies();
  cookieStore.set('token', token);
}

export async function getToken() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  return token;
}
export async function deleteToken() {
  const response = NextResponse.next();
  response.cookies.set('token', '', {
    expires: new Date(0), // Expire immediately
    path: '/', // Set the path for which the cookie is cleared
  });
  return response;
}

export async function getUser() {
  const token = await getToken();
  if (!token) return null;

  try {
    const user = jwtDecode(token);
    const currentTime = Date.now() / 1000;

    if (user.exp < currentTime) {
      await deleteToken();
      return null;
    }

    return user;
  } catch (error) {
    console.error(error);
    await deleteToken();
    return null;
  }
}
