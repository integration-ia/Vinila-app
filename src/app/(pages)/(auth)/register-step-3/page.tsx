import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import Link from "next/link"

const RegisterStepPageThree = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50/50 p-4 relative">
            {/* Background squares */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500 rounded-3xl -rotate-12" />
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-500 rounded-3xl rotate-12" />

            {/* Main card */}
            <div className="w-full max-w-[60rem] mx-auto bg-white rounded-[2rem] p-12 shadow-lg relative z-10">
                {/* Progress steps */}
                <div className="flex items-center mb-8 text-sm">
                    <div className="flex items-center text-gray-400">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-200 rounded-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </div>
                        <div className="ml-2">
                            <span>Personal</span>
                            <span className="text-xs text-gray-500 block">Información personal</span>
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
                    <div className="flex items-center text-orange-500">
                        <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-lg">
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

                {/* Form header */}
                <div className="mb-10">
                    <h1 className="text-2xl font-medium mb-4">Bienvenido a Macroestetica.com</h1>
                    <p className="text-gray-600 mb-4">
                        Te recordamos que somos una página para PROFESIONALES DE LA INDUSTRIA ESTÉTICA y la seguridad es primordial para nosotros y nuestros usuarios.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Por lo que te invitamos a autenticar tu perfil profesional.
                    </p>
                    <p className="text-gray-600">
                        Puedes autenticarlo en este momento o más adelante, pero es importante que lo realices para que tu perfil tenga la credibilidad necesaria para interactuar con empresas, profesionales y actividades dentro de la página
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-8">
                    <div className="space-y-2">
                        <label className="block text-sm">Adjuntar Cedula profesional *</label>
                        <p className="text-xs text-gray-500">Sube hasta 10 archivos compatibles. Tamaño máximo por archivo: 10.0 MB</p>

                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8">
                            <div className="flex flex-col items-center justify-center text-center">
                                <Upload className="h-10 w-10 text-gray-400 mb-4" />
                                <div className="space-y-2">
                                    <button type="button" className="text-orange-500 hover:text-orange-600">
                                        Cargar un archivo
                                    </button>
                                    <p className="text-sm text-gray-500">o arrastrar y soltar</p>
                                    <p className="text-xs text-gray-400">PNG, JPG, GIF hasta 10 MB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <label className="flex items-center space-x-3">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                        <span className="text-sm">Omitir por ahora</span>
                    </label>

                    <div className="flex justify-between pt-4">
                        <Link
                            href="/register-step-2"
                            className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            Anterior
                        </Link>
                        <Button
                            type="submit"
                            className="px-6 py-2 rounded-full"
                            disabled
                        >
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegisterStepPageThree