"use server"
import { signIn } from "@/auth"
import { db } from "@/lib/db"
import { formSchema } from "@/lib/zod"
import { AuthError } from "next-auth"
import { z } from "zod"
import bcrypt from "bcryptjs"

export const loginAction = async (
    values: z.infer<typeof formSchema>
) => {
    try {
        await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        })
        return { success: true }
    } catch (error) {
        if (error instanceof AuthError)
            return { error: error.cause?.err?.message }

        return { error: "error 500" }
    }
}

export const registerAction = async (
    values: z.infer<typeof formSchema>
) => {
    try {
        const { data, success } = formSchema.safeParse(values)

        if (!success)
            return { error: "Información invalida" }

        // verificar si el usuario ya existe 
        const user = await db.user.findUnique({
            where: {
                email: data.email,
            }
        })

        if (user)
            return { error: "El usuario ya existe" }

        const passwordHash = await bcrypt.hash(data.password, 10);

        await db.user.create ({
            data: {
                email: data.email,
                password: passwordHash
            }
        });

        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false
        });

        return { success: true };

    } catch (error) {
        if (error instanceof AuthError)
            return { error: error.cause?.err?.message }

        return { error: "error 500" }
    }
}