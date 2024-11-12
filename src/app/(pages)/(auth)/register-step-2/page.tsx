
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

const RegisterStepPage = () => {
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
                    <div className="flex items-center text-orange-500">
                        <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-lg">
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

                {/* Form header */}
                <div className="mb-10">
                    <h1 className="text-2xl font-medium mb-1">Información profesional o comercial</h1>
                    <p className="text-gray-500 text-sm">Ingresa tu información profesional o comercial</p>
                </div>

                {/* Form */}
                <form className="space-y-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <span className="text-sm">¿Eres profesional de la industria estética?</span>
                            <Switch />
                        </div>
                        <div className="flex items-center space-x-3">
                            <span className="text-sm">¿Eres proveedor de la industria estética?</span>
                            <Switch />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm">Nombre de la marca *</label>
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm">Giro *</label>
                            <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500">
                                <option>Seleccionar giro</option>
                                <option>Opción 1</option>
                                <option>Opción 2</option>
                                <option>Opción 3</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm">Otro</label>
                            <input
                                type="text"
                                placeholder="Otro giro"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="block text-sm font-medium">¿A qué profesionales va dirigida tu giro? *</label>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-2">
                                <span className="text-sm">Personal médico</span>
                                <Switch />
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-sm">Esteticistas</span>
                                <Switch />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-sm text-gray-500">Otro (Se revisará tu información y se te asignará la mejor opción)</label>
                                <input
                                    type="text"
                                    placeholder="Otro"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between pt-4">
                        <Link
                            href="/full-register"
                            className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            Anterior
                        </Link>
                        <Link
                            href="/register-step-3"
                            className="px-6 py-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                        >
                            Siguiente
                        </Link>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default RegisterStepPage