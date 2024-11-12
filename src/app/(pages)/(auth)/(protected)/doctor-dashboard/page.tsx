import { auth } from "@/auth"
import LogoutButton from "@/components/forms/logout-button"

const DrDashboardPage = async () => {
    const session = await auth()

    if (!session)
        return <div>No autenticado</div>

    if (session?.user?.role !== "admin")
        return <div>Usted no tiene una cuenta de doctor</div>

    return <section className="container">
        <pre>{JSON.stringify(session, null, 2)}</pre>

        <h1>Bienvenido al panel de control para medicos</h1>
        {/* <h2>Tu email: {session?.user?.email}</h2> */}
        <LogoutButton />
    </section>
}
export default DrDashboardPage