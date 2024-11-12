import NextAuth from "next-auth"

import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "@/lib/db"

import authConfig from "@/auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    callbacks: {
        // jwt() se ejecuta cada vez que se crea o actualiza un token JWT.
        // Acá es donde se puede add extra info al token
        jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token
        },
        // jwt() se usa to add info del token a la sesión del user.
        // hace que esté disponible en el cliente
        session({ session, token }) {
            session.user.role = token.role
            return session
        },
    },
})