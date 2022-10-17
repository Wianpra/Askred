import React, { useCallback } from 'react'
import useDarkMode from 'pages/utils/hooks/useDarkMode'
import { Switcher } from 'pages/components/ui/Switcher'

const ModeSwitcher = () => {

	const [isDark, setIsDark] = useDarkMode()

	const onSwitchChange = useCallback((checked) => {
		setIsDark(checked ? 'dark' : 'light')
	}, [setIsDark])

	return (
		<div>
			<Switcher 
				defaultChecked={isDark}
				onChange={checked => onSwitchChange(checked)}
			/>
		</div>
	)
}

export default ModeSwitcher
