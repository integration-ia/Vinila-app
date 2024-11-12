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