import NextAuth from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {

  interface User {
    id: string,
    user:UserType,
    token: string
  }
}

export interface UserType {
  name: string
  email: string
  role: string
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user : UserType,
    idToken?: string
  }
}

