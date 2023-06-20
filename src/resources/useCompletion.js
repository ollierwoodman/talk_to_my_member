import { PARAM_NAME_FORORAGAINST, PARAM_NAME_POLICYNAME } from '@/pages/api/compose'
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export function useCompletion (isFor, policyName, shouldFetch=true) {
  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/compose?${PARAM_NAME_FORORAGAINST}=${isFor ? "for" : "against"}&${PARAM_NAME_POLICYNAME}=${policyName}` : null, fetcher)

  return {
    data,
    isLoading: isLoading,
    isError: error,
  }
}