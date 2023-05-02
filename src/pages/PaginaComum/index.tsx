import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from 'componentes/Header'
import Card from 'componentes/Card'

export default function PaginaComum() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Card>
          <Outlet />
        </Card>
      </main>
    </>
  )
}
