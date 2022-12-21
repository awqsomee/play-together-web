import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'

const AppRouter: FC = () => {
  const auth = true
  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={<route.component />} key={route.path} />
      ))}
      {auth ? (
        privateRoutes.map((route) => <Route path={route.path} element={<route.component />} key={route.path} />)
      ) : (
        <></>
      )}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouter
