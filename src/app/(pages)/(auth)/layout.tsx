import React from 'react'

const Layout = ({children}) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-50 p-4 relative overflow-hidden">
        {children}
    </section>
  )
}

export default Layout