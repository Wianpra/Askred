import React  from 'react'
import { Navigate, Outlet } from 'next/link'
import appConfig from 'pages/configs/app.config'
import useAuth from 'pages/utils/hooks/useAuth'

const { authenticatedEntryPath } = appConfig

const PublicRoute = () => {

    const { authenticated } = useAuth()
  
	return authenticated ? <Navigate to={authenticatedEntryPath} /> : <Outlet/>
}

export default PublicRoute