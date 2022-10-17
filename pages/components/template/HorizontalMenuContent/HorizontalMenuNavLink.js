import React from 'react'
import Link from 'next/link'

const HorizontalMenuNavLink = ({path, children}) => {
	return (
		<Link className="h-full w-full flex items-center" to={path}>
			<span>{children}</span>
		</Link>
	)
}

export default HorizontalMenuNavLink