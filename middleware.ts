import authConfig from "./auth.config"
import NextAuth from "next-auth"
import { NextResponse } from "next/server"

const { auth: middleware } = NextAuth(authConfig)

const publicRoutes = [
    "/",
    "/login",
    "/register"
]

export default middleware((req) => {
    const { nextUrl, auth } = req
    // returns true or false
    const isLoggedIn = !!auth?.user

    console.log({ isLoggedIn });


    // proteger /dashboard /admin
    if (!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
        return NextResponse.redirect(new URL("/login", nextUrl))
    }

    return NextResponse.next()
})

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};