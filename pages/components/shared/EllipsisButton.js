import React from 'react'
import Button from 'pages/components/ui/Buttons'

const EllipsisButton = props => {

	const  { shape = 'circle', variant = 'plain', size ='xs'  } = props

	return (
		<Button
			shape={shape}
			variant={variant}
			size={size}
			{...props}
		/>
	)
}

export default EllipsisButton
