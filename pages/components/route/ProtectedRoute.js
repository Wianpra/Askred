import React from 'react'
import appConfig from 'pages/configs/app.config'
import { REDIRECT_URL_KEY } from 'pages/constants/app.constant' 
import { Navigate, Outlet, useLocation } from 'next/link'
import useAuth from 'pages/utils/hooks/useAuth'

const { unAuthenticatedEntryPath } = appConfig

const ProtectedRoute = () => {

	const { authenticated } = useAuth()

	const location = useLocation()

	if (!authenticated) {
		return <Navigate to={`${unAuthenticatedEntryPath}?${REDIRECT_URL_KEY}=${location.pathname}`} replace />;
	}

	return <Outlet />
}

export default ProtectedRoute