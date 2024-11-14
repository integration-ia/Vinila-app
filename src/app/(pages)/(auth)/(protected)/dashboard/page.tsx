import { auth } from "@/auth";
import LogoutButton from "@/components/forms/logout-button";
import { redirect } from "next/navigation"; // Importa `redirect` de Next.js para la redirección en el servidor
import "@/app/globals.css";


const DashboardPage = async () => {
    const session = await auth();

    // Redirige a "/login" si no hay sesión activa
    if (!session) {
        redirect("/login");
    }

    return (
        <section className="container">
            <pre>{JSON.stringify(session, null, 2)}</pre>
            <LogoutButton />
        </section>
    );
};

export default DashboardPage;
