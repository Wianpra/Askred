import { useMemo } from 'react'
import { useLocation } from 'next/link'

export default function useQuery() {
	const { search } = useLocation()
	return useMemo(() => new URLSearchParams(search), [search])
}