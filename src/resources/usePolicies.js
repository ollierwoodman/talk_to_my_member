import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())

export function usePolicies () {
  const { data, error, isLoading } = useSWR(`/api/policies`, fetcher)
 
  return {
    data,
    isLoading: isLoading,
    isError: error
  }
}