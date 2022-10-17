import React from 'react'
import { Navigate } from 'next/link'
import useAuthority from 'pages/utils/hooks/useAuthority'

const AuthorityGuard = props => {

	const { userAuthority = [], authority = [], children } = props

	const roleMatched = useAuthority(userAuthority, authority)

	return roleMatched ? children : <Navigate to="/access-denied" />
}

export default AuthorityGuard