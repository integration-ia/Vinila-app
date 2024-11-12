import { auth } from "@/auth"
import LogoutButton from "@/components/forms/logout-button"

const DashboardPage = async () => {
    const session = await auth()

    if (!session)
        return <div>No autenticado</div>

    return <section className="container">
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <LogoutButton />
    </section>
}
export default DashboardPage