import React from 'react'
import Header from 'pages/components/template/Header'
import SidePanel from 'pages/components/template/SidePanel'
import UserDropdown from 'pages/components/template/UserDropdown'
import SideNavToggle from 'pages/components/template/SideNavToggle'
import MobileNav from 'pages/components/template/MobileNav'
import SideNav from 'pages/components/template/SideNav'
import View from 'pages/views'

const HeaderActionsStart = () => {
	return (
		<>
			<MobileNav />
			<SideNavToggle />
		</>
	)
}

const HeaderActionsEnd = () => {
	return (
		<>
			<SidePanel />
			<UserDropdown hoverable={false} />
		</>
	)
}

const ModernLayout = props => {
	return (
		<div className="app-layout-modern flex flex-auto flex-col">
			<div className="flex flex-auto min-w-0">
				<SideNav />
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
					<Header 
						className="border-b border-gray-200 dark:border-gray-700" 
						headerEnd={<HeaderActionsEnd />} 
						headerStart={<HeaderActionsStart />}
					/>
					<View {...props} />
				</div>
			</div>
		</div>
	)
}

export default ModernLayout
