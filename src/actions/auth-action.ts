"use server"
import { signIn } from "@/auth"
import { formSchema } from "@/lib/zod"
import { z } from "zod"

export const loginAction = async (
    values: z.infer<typeof formSchema>
) => {
    try {
        await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        })

    } catch (error) {
        console.log(error);
    }
}