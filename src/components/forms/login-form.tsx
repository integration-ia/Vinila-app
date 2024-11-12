'use client'

import { loginAction } from "@/actions/auth-action"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

const LoginForm = () => {
    const [error, setError] = useState<string | null>();
    const [isPending, startTransition] = useTransition();
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setError(null)
        startTransition(async () => {
            const response = await loginAction(values);
            if (response.error)
                setError(response.error);

            else router.push("/dashboard");
        });
    }

    return (
        <div>
            {/* Background squares */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-800 rounded-3xl -rotate-12" />
            <div className="absolute -top-24 -left-24 w-72 h-72 border-2 border-dashed border-blue-800 rounded-3xl rotate-12" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-800 rounded-3xl rotate-12" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 border-2 border-dashed border-blue-800 rounded-3xl -rotate-12" />

            {/* Main card */}
            <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-lg relative z-20">
                <div className="space-y-6">
                    {/* Header */}
                    <header className="text-center space-y-2">
                        <h1 className="text-2xl font-medium">¡Bienvenido a Macroestética! 👋</h1>
                        <p className="text-gray-600 text-sm">
                            Inicie sesión en su cuenta y comience esta experiencia
                        </p>
                    </header>
                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Correo</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='email'
                                                placeholder="jhondoe@example.com"

                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Contraseña</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='password'
                                                placeholder="Ingrese su contraseña"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-800 focus:ring-blue-800" />
                                    <span>Recordar datos</span>
                                </label>
                                <Link href="#" className="text-sm text-blue-800 hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>

                            {error && <FormMessage className='text-center pt-4 text-base'>{error}</FormMessage>}
                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full py-5 bg-blue-900 text-white rounded-full hover:bg-blue-950 transition-colors"
                            >
                                Iniciar sesión
                            </Button>

                            <div className="text-center space-y-4">
                                <p className="text-sm text-gray-600">
                                    ¿Eres nuevo en la plataforma?{" "}
                                    <Link href="/register" className="text-orange-500 hover:underline">
                                        Registrarse
                                    </Link>
                                </p>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">o</span>
                                    </div>
                                </div>

                                {/* <div className="flex justify-center space-x-4">
                                    <button className="p-2">
                                        <Image src="/placeholder.svg?height=24&width=24" alt="Google" width={24} height={24} />
                                    </button>
                                    <button className="p-2">
                                        <Image src="/placeholder.svg?height=24&width=24" alt="Apple" width={24} height={24} />
                                    </button>
                                    <button className="p-2">
                                        <Image src="/placeholder.svg?height=24&width=24" alt="Facebook" width={24} height={24} />
                                    </button>
                                </div> */}
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default LoginForm