import React from 'react'
import View from 'pages/views'
import SidePanel from 'pages/components/template/SidePanel'

const BlankLayout = props => {
	return (
		<div className="app-layout-blank flex flex-auto flex-col h-[100vh]">
			<View {...props}/>
			<SidePanel className="hidden" />
		</div>
	)
}

export default BlankLayout