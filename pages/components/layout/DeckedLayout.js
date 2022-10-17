import React from 'react'
import Header from 'pages/components/template/Header'
import SidePanel from 'pages/components/template/SidePanel'
import UserDropdown from 'pages/components/template/UserDropdown'
import HeaderLogo from 'pages/components/template/HeaderLogo'
import SecondaryHeader from 'pages/components/template/SecondaryHeader'
import MobileNav from 'pages/components/template/MobileNav'
import View from 'pages/views'

const HeaderActionsStart = () => {
	return (
		<>
			<HeaderLogo />
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

const DeckedLayout = () => {
	return (
		<div className="app-layout-simple flex flex-auto flex-col min-h-screen">
			<div className="flex flex-auto min-w-0">
				<div className="flex flex-col flex-auto min-h-screen min-w-0 relative w-full">
					<Header
						container
						className="shadow dark:shadow-2xl"
						headerStart={<HeaderActionsStart />}
						headerEnd={<HeaderActionsEnd />} 
					/>
					<SecondaryHeader contained />
					<View pageContainerType="contained" />
				</div>
			</div>
		</div>
	)
}

export default DeckedLayout
