import { PARAM_NAME_POSTCODE } from '@/pages/member/find'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useMember (postcode, shouldFetch=true) {
  const { data, error, isLoading } = useSWR(shouldFetch ? `/api/member?${PARAM_NAME_POSTCODE}=${postcode}` : null, fetcher)

  return {
    data,
    isLoading: isLoading,
    isError: error,
  }
}