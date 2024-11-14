'use client'
import { loginAction } from "@/actions/auth-action";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc"; // Icon for Google
import { BsApple } from "react-icons/bs"; // Icon for Apple
import "@/app/globals.css";

const LoginForm = () => {
    const [error, setError] = useState<string | null>();
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setError(null);
        startTransition(async () => {
            const response = await loginAction(values);
            if (response.error) setError(response.error);
            else router.push("/dashboard");
        });
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden bg-slate-50">
            {/* Background squares */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-gray-800 rounded-3xl -rotate-12" />
            <div className="absolute -top-24 -left-24 w-72 h-72 border-2 border-dashed border-gray-800 rounded-3xl rotate-12" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gray-800 rounded-3xl rotate-12" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 border-2 border-dashed border-gray-800 rounded-3xl -rotate-12" />

            {/* Main card */}
            <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-lg relative z-20">
                <div className="space-y-6">
                    {/* Header */}
                    <header className="text-center space-y-2">
                        <h1 className="text-2xl font-medium text-gray-800">¡Bienvenido a Vinila Records 👋</h1>
                        <p className="text-gray-600 text-sm">Inicie sesión en su cuenta y comience esta experiencia</p>
                    </header>
                    <Form {...form}>
                        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700">Correo</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
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
                                        <FormLabel className="text-gray-700">Contraseña</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="Ingrese su contraseña"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center justify-between">
                                <label className="flex items-center space-x-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-800"
                                    />
                                    <span>Recordar datos</span>
                                </label>
                                <Link href="#" className="text-sm text-gray-800 hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>

                            {error && (
                                <FormMessage className="text-center pt-4 text-base text-red-500">{error}</FormMessage>
                            )}
                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full py-5 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                            >
                                Iniciar sesión
                            </Button>

                            <div className="text-center space-y-4">
                                <p className="text-sm text-gray-600">
                                    ¿Eres nuevo en la plataforma?{" "}
                                    <Link href="/register" className="text-gray-800 hover:underline">
                                        Registrarse
                                    </Link>
                                </p>

                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">o</span>
                                    </div>
                                </div>

                                {/* Botones de Google y Apple */}
                                <div className="flex flex-col space-y-4">
                                    <Button className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-3">
                                        <FcGoogle className="mr-2 w-5 h-5" />
                                        <span className="text-white">Iniciar sesión con Google</span>
                                    </Button>
                                    <Button className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-3">
                                        <BsApple className="mr-2 w-5 h-5 text-black" />
                                        <span className="text-white">Iniciar sesión con Apple</span>
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
