"use client"
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'

const LogoutButton = () => {
    const handleClick = async () => {
        await signOut({
            callbackUrl: "/login"
        })
    }

  return (
    <Button onClick={handleClick}>Cerrar sesión</Button>
  )
}

export default LogoutButton