import React from 'react'
import Header from 'pages/components/template/Header'
import SidePanel from 'pages/components/template/SidePanel'
import UserDropdown from 'pages/components/template/UserDropdown'
import MobileNav from 'pages/components/template/MobileNav'
import StackedSideNav from 'pages/components/template/StackedSideNav'
import View from 'pages/views'

const HeaderActionsStart = () => {
	return (
		<>
			<MobileNav />
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

const StackedSideLayout = () => {
	return (
		<div className="app-layout-stacked-side flex flex-auto flex-col">
			<div className="flex flex-auto min-w-0">
				<StackedSideNav />
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
					<Header 
						className="shadow dark:shadow-2xl"
						headerStart={<HeaderActionsStart />}
						headerEnd={<HeaderActionsEnd />} 
					/>
					<div className="h-full flex flex-auto flex-col">
						<View />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StackedSideLayout