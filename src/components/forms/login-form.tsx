'use client'

import { loginAction } from "@/actions/auth-action"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { formSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { z } from "zod"

const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        await loginAction(values)
    }

    // const { formState } = form
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
                            {/* <div className="space-y-2">
              <label className="block text-sm text-gray-600">Email o nombre de usuario</label>
              <input
                type="text"
                placeholder="Ingrese su nombre o email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div> */}
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
                            {/* <label className="block text-sm text-gray-600">Contraseña</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-800"
                                />
                                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                                    <Eye className="w-5 h-5" />
                                </button>
                            </div> */}

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-800 focus:ring-blue-800" />
                                    <span>Recordar datos</span>
                                </label>
                                <Link href="#" className="text-sm text-blue-800 hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2.5 bg-blue-900 text-white rounded-full hover:bg-blue-950 transition-colors text-sm font-medium"
                            >
                                Iniciar sesión
                            </button>

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