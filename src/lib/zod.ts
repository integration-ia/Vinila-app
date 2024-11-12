import { object, string } from "zod"

export const formSchema = object({
  email: string({ required_error: "El correo es requerido" })
    .min(1, "El correo es requerido")
    .email("Ingrese una dirección de correo válida."),
  password: string({ required_error: "La contraseña es requerida." })
    .min(1, "La contraseña es requerida.")
    .min(8, "La contraseña debe ser de al menos 8 caracteres.")
    .max(32, "La contraseña debe ser menor a 32 caracteres."),
})

export const registerSchema = object({
  first_name: string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido")
    .max(30, "El nombre no puede ser mayor a 30 caracteres"),
  last_name: string({ required_error: "El apellido es requerido" })
    .min(1, "El apellido es requerido")
    .max(30, "El apellido no puede ser mayor a 30 caracteres"),
  phone: string({ required_error: "El telefono es requerido." })
    .min(7, "El telefono no puede ser menor a 7 dígitos")
    .max(15, "El telefono no puede ser mayor a 12 dígitos"),
  country: string({ required_error: "El país es requerido" })
    .min(1, "El país es requerido"),
  city: string({ required_error: "La ciudad es requerida" })
    .min(1, "La ciudad es requerida"),
  email: string({ required_error: "El correo es requerido" })
    .min(1, "El correo es requerido")
    .email("Ingrese una dirección de correo válida."),
  password: string({ required_error: "La contraseña es requerida." })
    .min(1, "La contraseña es requerida.")
    .min(8, "La contraseña debe ser de al menos 8 caracteres.")
    .max(32, "La contraseña debe ser menor a 32 caracteres."),
})