'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { registerSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { z } from "zod"
// import { Button } from "../ui/button"
// import { useState, useTransition } from "react"
// import { useRouter } from "next/navigation"
// import { registerAction } from "@/actions/auth-action"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Button } from "../ui/button"
import Link from "next/link"

const FullRegisterForm = () => {
    // const [step, setStep] = useState(1)
    // const [error, setError] = useState<string | null>();
    // const [isPending, startTransition] = useTransition();
    // const router = useRouter()

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            phone: "",
            country: "",
            city: "",
            email: "",
            password: ""
        },
    });

    const onSubmit = async (values: z.infer<typeof registerSchema>) => {
        // setError(null)
        // startTransition(async () => {
        //     const response = await registerAction(values);
        //     if (response.error)
        //         setError(response.error);

        //     else router.push("/dashboard");
        // });
        console.log(values)
    }

    const { handleSubmit, control } = form
    
    return (
        <div className="w-[92%] max-w-[115rem] mx-auto pb-5 relative">
            {/* Background squares */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500 rounded-3xl -rotate-12" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-500 rounded-3xl rotate-12" />

            {/* Main card */}
            <div className="w-full bg-white rounded-[2rem] p-12 shadow-lg relative z-10 max-w-[60rem] mx-auto">
                {/* Progress steps */}
                <div className="flex items-center mb-8 text-sm">
                    <div className="flex items-center text-orange-500">
                        <div className="w-8 h-8 text-wrap flex items-center justify-center bg-orange-500 text-white rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <div className="ml-2 flex flex-col">
                            <span >Personal</span>
                            <span className="text-xs text-gray-500">Información personal</span>

                        </div>
                    </div>
                    <div className="flex-1 h-px bg-gray-200 mx-4" />
                    <div className="flex items-center text-gray-400">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                            </svg>
                        </div>
                        <div className="ml-2">
                            <span>Profesional o comercial</span>
                            <span className="text-xs text-gray-500 block">Ingresar datos y detalles</span>
                        </div>
                    </div>
                    <div className="flex-1 h-px bg-gray-200 mx-4" />
                    <div className="flex items-center text-gray-400">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                        </div>
                        <div className="ml-2">
                            <span>Completado</span>
                            <span className="text-xs text-gray-500 block">Enviar archivos</span>
                        </div>
                    </div>
                </div>


                <div className="mb-10">
                    <h1 className="text-xl font-semibold mb-2">Información personal</h1>
                    <p className="text-gray-500 text-sm">Ingrese su información personal</p>
                </div>
                {/* Form */}
                <div>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                            <FormField
                                control={control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem className="w-[48%]">
                                        <FormLabel>Nombre</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder="John"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem className="w-[48%]">
                                        <FormLabel>Apellidos</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder="Doe"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="w-[48%]">
                                        <FormLabel>Número de celular *</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='text'
                                                placeholder="202 555 0111"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="country"
                                render={({ field }) => (
                                    <FormItem className="w-[48%]">
                                        <FormLabel>País</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Seleccionar país" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="mex">Mexico</SelectItem>
                                                    <SelectItem value="arg">Argentina</SelectItem>
                                                    <SelectItem value="br">Brasil</SelectItem>
                                                    <SelectItem value="bol">Bolivia</SelectItem>
                                                    <SelectItem value="uy">Uruguay</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="city"
                                render={({ field }) => (
                                    <FormItem className="w-[48%]">
                                        <FormLabel>Ciudad</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Seleccionar ciudad" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="mxdf">Ciudad de Mexico</SelectItem>
                                                    <SelectItem value="my">Monterey</SelectItem>
                                                    <SelectItem value="aca">Acapulco</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="w-[48%]">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type='email'
                                                placeholder="john.doe@example.com"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem className="w-[48%]">
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
                            <div className="pt-10">
                                <label className="flex items-center space-x-3 pb-3">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">Acepto recibir el Newsletter con noticias de Macroestética.com.</span>
                                </label>

                                <label className="flex items-center space-x-3 pb-3">
                                    <input type="checkbox" className="w-6 h-6 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">
                                        Acepto y permito que Macroestética.com almacene y procese mis datos personales.
                                        Para ver el aviso de privacidad por favor haga clic <a href="#" className="text-orange-500">aquí</a>.
                                    </span>
                                </label>

                                <label className="flex items-center space-x-3 pb-3">
                                    <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                    <span className="text-sm">Acepto que mis datos sean compartidos con terceros cuidadosamente seleccionados</span>
                                </label>
                            </div>
                        </form>
                    </Form>
                </div>
                <div className="flex justify-between pt-4">
                    <Button
                        type="button"
                        disabled
                        className="px-6 py-2 rounded-full"
                    >
                        Anterior
                    </Button>
                    <Link
                        href="/register-step-2"
                        className="px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                    >
                        Siguiente
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default FullRegisterForm