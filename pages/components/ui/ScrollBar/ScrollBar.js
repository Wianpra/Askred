import React, { forwardRef } from 'react'

const ScrollBar = forwardRef((props, ref) => {

	const { direction = 'ltr', ...rest } = props

	return (
		<Scrollbars
			ref={ref}
			renderView={props => (
				<div 
					{...props} 
					style={{ 
						...props.style, 
						...(direction === 'rtl' && { marginLeft: props.style.marginRight, marginRight: 0}) 
					}}
				/> 
			)} 
			{...rest} 
		/>
	)
})

export default ScrollBar
