import { decode } from 'next-auth/jwt';
import { cookies } from 'next/headers';
// import { headers } from "next/headers";





export async function getUserToken() {
    const decodedToken = (await cookies()).get("next-auth.session-token")?.value

    const token = await decode({ token : decodedToken , secret : process.env.NEXTAUTH_SECRET !})
    console.log("tooooooken", token)

    return token?.token
}


// export async function getUserToken() {
//   const token = await getToken({
//     req: { headers: await headers() } as any,
//     secret: process.env.NEXTAUTH_SECRET,
//   });
//   console.log("token", token);
//   return token;
// }