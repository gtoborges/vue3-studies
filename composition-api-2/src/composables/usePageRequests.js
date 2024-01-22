import { computed, reactive } from "vue"

const activeRequests = reactive([])

export default function usePageRequests() {
  
  const isLoading = computed( () => !!activeRequests.length)

  const makeRequest = async (url) => {
    const index = activeRequests.length
    activeRequests[index] = url
    const response = await fetch(url).catch( error => alert(error))
    const data = await response.json()
    activeRequests.splice(index, 1)
    return data
  }

  return { isLoading, makeRequest }
}
