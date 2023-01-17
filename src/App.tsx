import React  from 'react'
import { Route, Routes } from "react-router-dom"
import { AuthPage } from "./pages/AuthPage"
import { HomePage } from "./pages/HomePage"
import { ProtectedRoute } from "./components/ProtectedRoute"
import { NotFoundPage } from "./pages/NotFoundPage"

function App() {
  const isAuth = true


  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute isAllowed={isAuth}><HomePage/></ProtectedRoute>}/>
        <Route path="auth/:mode" element={<AuthPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}

export default App
