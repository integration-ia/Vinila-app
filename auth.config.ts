import { db } from "@/lib/db";
import { formSchema } from "@/lib/zod";
import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

export default {
    providers: [
        Credentials({
            authorize: async (credentials) => {
                const { data, success } = formSchema.safeParse(credentials)

                if (!success)
                    throw new Error("Credenciales invalidas")

                // verificar si el usuario ya existe 
                const user = await db.user.findUnique({
                    where: {
                        email: data.email,
                    }
                })

                if (!user || !user.password)
                    throw new Error("Credenciales invalidas")

                // verificar si la contraseña es correcta
                const isValid = await bcrypt.compare(data.password, user.password)

                if (!isValid)
                    throw new Error("Credenciales invalidas")

                return user
            }
        })
    ]
} satisfies NextAuthConfig;