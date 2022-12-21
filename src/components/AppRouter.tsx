import React, { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router'
import { useAppSelector } from '../store/hooks'

const AppRouter: FC = () => {
  const { isAuth } = useAppSelector((state) => state.authToolkit)
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => <Route path={route.path} element={<route.component />} key={route.path} />)
        : publicRoutes.map((route) => <Route path={route.path} element={<route.component />} key={route.path} />)}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppRouter
