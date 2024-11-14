'use client'

import { useState, useTransition } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { registerAction } from "@/actions/auth-action";
import { Eye, EyeOff } from "lucide-react"; // Asegúrate de tener estos íconos instalados
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { BsApple } from "react-icons/bs"; // Apple Icon
import "@/app/globals.css";

const RegisterForm = () => {
    const [error, setError] = useState<string | null>();
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    // Estado para alternar visibilidad de la contraseña
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

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
            const response = await registerAction(values);
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
                        <h1 className="text-2xl font-medium text-gray-800">¡Bienvenido a vinila Records 👋</h1>
                        <p className="text-gray-500 text-sm">Regístrese en su cuenta</p>
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
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Ingrese su contraseña"
                                                    {...field}
                                                />
                                                <span
                                                    onClick={togglePasswordVisibility}
                                                    className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                                                >
                                                    {showPassword ? (
                                                        <EyeOff className="w-5 h-5 text-gray-500" />
                                                    ) : (
                                                        <Eye className="w-5 h-5 text-gray-500" />
                                                    )}
                                                </span>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {error && <FormMessage className="text-center pt-4 text-base text-red-500">{error}</FormMessage>}
                            <Button
                                type="submit"
                                disabled={isPending}
                                className="w-full py-5 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
                            >
                                Iniciar sesión
                            </Button>

                            <div className="text-center space-y-4">
                                <p className="text-sm text-gray-600">
                                    ¿Ya tienes una cuenta?{" "}
                                    <Link href="/login" className="text-gray-800 hover:underline">
                                        Inicia sesión
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
                                    <Button className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-3 ">
                                        <FcGoogle className="mr-2 w-5 h-5" />
                                        <span className="text-white">Registrarse con Google</span>
                                    </Button>
                                    <Button className="flex items-center justify-center border border-gray-300 rounded-full px-4 py-3 ">
                                        <BsApple className="mr-2 w-5 h-5 text-black" />
                                        <span className="text-white">Registrarse con Apple</span>
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

export default RegisterForm;
