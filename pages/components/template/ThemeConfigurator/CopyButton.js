import React from 'react'
import { Button} from 'pages/components/ui/Buttons'
import { toast} from 'pages/components/ui/toast'
import { Notification } from 'pages/components/ui/Notification'
import { themeConfig } from 'pages/configs/theme.config'
import { useSelector } from 'react-redux'

const CopyButton = () => {

	const theme = useSelector((state) => state.theme)

	const handleCopy = () => {
		const config = {
			...themeConfig,
			...theme,
			layout: {
				type: theme.layout.type,
				sideNavCollapse: theme.layout.sideNavCollapse
			},
			panelExpand: false
		}

		navigator.clipboard.writeText(JSON.stringify(config, null, 2))

		toast.push(
			<Notification title="Copy Success" type="success" >
				Please replace themeConfig in 'src/configs/themeConfig.js'
			</Notification>
		,{
			placement: 'top-center'
		})
	}

	return (
		<Button block variant="solid" onClick={handleCopy}>
			Copy config
		</Button>
	)
}

export default CopyButton