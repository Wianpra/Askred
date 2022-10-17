import React from 'react'
import withHeaderItem from 'pages/utils/hoc/withHeaderItem'
import { useSelector, useDispatch } from 'react-redux'
import { setSideNavCollapse } from 'pages/store/theme/themeSlice'
import useResponsive from 'pages/utils/hooks/useResponsive'
import { NavToggle } from 'pages/components/shared'

export const SideNavToggle = ({ className }) => {

	const sideNavCollapse = useSelector((state) => state.theme.layout.sideNavCollapse)
	const dispatch = useDispatch()

	const { larger } = useResponsive()

	const onCollapse = () => {
		dispatch(setSideNavCollapse(!sideNavCollapse))
	}

	return (
		<>
			{larger.md && (
				<div 
					className={className}
					onClick={onCollapse}
				>
					<NavToggle className="text-2xl" toggled={sideNavCollapse} />
				</div>
			)}
		</>
	)
}

export default withHeaderItem(SideNavToggle)
