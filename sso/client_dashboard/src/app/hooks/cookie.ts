'use server'

import { cookies } from 'next/headers'

export async function setCookie(name: string, value: string) {
    const expires = new Date();
    console.log("Expires: ", expires);
    expires.setDate(expires.getDate() + 28);
    console.log("Date: ", expires);

    cookies().set({
        name: name,
        value: value,
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        expires: expires,
        priority: 'high',
        secure: true
    })
    const token = cookies().get(name);
    console.log("EHEHEHEHEEHEH ", token);
}

export async function getCookie(name: string) {

    const token = cookies().get(name);
    console.log("EHEHEHEHEEHEH ", token);
    
    return token
}
