import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";




export const authOptions = {
    pages: {
        signIn: '/login'
    },

    providers : [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })
                const data = await res.json()
                console.log(data, "loged dataaaaaaaaaaaaaaaaaa");

                if (data.message == "success") {
                    // const token = "eyJ0eXAiO.../// jwt token";
                    const decoded = jwtDecode(data.token);

                    console.log("DECODED",decoded);
                    return {
                        id: decoded.id,
                        user: data.user,
                        token: data.token

                    }
                }
                else {
                    throw new Error(data.message || "Something went wrong")

                }

                return null
            }

        })
    ] ,
    
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user.user;
                token.token = user.token;
            }
            return token
        },

        async session({ session, token }) {

            if (token) {
                session.user = token.user;
                (session as { token?: unknown }).token = token.token;

                // session.token = token.token;
            }

            return session
        },

    }
}