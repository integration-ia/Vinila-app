import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
    providers: [
        Credentials({
            authorize: async (credentials) => {
                console.log({ credentials });
                if (credentials.email !== "test@test.com") {
                    throw new Error("Credenciales invalidas")
                }
                return {
                    id: "1",
                    email: "test@test.com",
                    password: "12345678"
                }

                // return user
            }
        })
    ]
} satisfies NextAuthConfig;