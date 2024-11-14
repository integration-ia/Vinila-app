// src\app\api\auth\[...nextauth]\route.ts
import { handlers } from "@/auth"
import NextAuth from "next-auth"
export const { GET, POST } = handlers
import Google from "next-auth/providers/google"
 
export const {  auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
})