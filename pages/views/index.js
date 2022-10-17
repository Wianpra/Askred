import React, { Suspense } from 'react'
import { Loading } from 'pages/components/shared'
import { protectedRoutes, publicRoutes } from 'pages/configs/routes.config'
import appConfig from 'pages/configs/app.config'
import PageContainer from 'pages/components/template/PageContainer'
import { Routes, Route, Navigate } from 'next/link'
import { useSelector } from 'react-redux'
import ProtectedRoute from 'pages/components/route/ProtectedRoute'
import PublicRoute from 'pages/components/route/PublicRoute'
import AuthorityGuard from 'pages/components/route/AuthorityGuard'
import AppRoute from 'pages/components/route/AppRoute'

const { authenticatedEntryPath } = appConfig

const AllRoutes = props => {

	const userAuthority = useSelector((state) => state.auth.user.authority)

	return (
		<Routes>
			<Route path="/" element={<ProtectedRoute />}>
				<Route path="/" element={<Navigate replace to={authenticatedEntryPath} />} />
				{protectedRoutes.map((route, index) => (
					<Route 
						key={route.key + index} 
						path={route.path}
						element={
							<AuthorityGuard 
								userAuthority={userAuthority}
								authority={route.authority}
							>
								<PageContainer {...props} {...route.meta}>
									<AppRoute
										routeKey={route.key} 
										component={route.component}
										{...route.meta} 
									/>
								</PageContainer>
							</AuthorityGuard>
						}
					/>
				))}
				<Route path="*" element={<Navigate to="/" replace />} />
			</Route>
			<Route path="/" element={<PublicRoute />}>
				{publicRoutes.map(route => (
					<Route 
						key={route.path} 
						path={route.path}
						element={
							<AppRoute
								routeKey={route.key} 
								component={route.component}
								{...route.meta} 
							/>
						}
					/ >
				))}
			</Route>
		</Routes>
	)

} 

const Views = props => {
	return (
		<Suspense fallback={<Loading loading={true} />}>
			<AllRoutes {...props}/>
		</Suspense>
	)
}

export default Views
