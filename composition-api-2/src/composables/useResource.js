import { ref } from "vue";
import usePageRequests from "./usePageRequests";

export default function useResource(resource) {
  const { makeRequest } = usePageRequests()
  const items = ref([])
  const item = ref([])

  const baseURL = `https://jsonplaceholder.typicode.com/${resource}`
  
  const fetchAll = async () => items.value = await makeRequest(baseURL)

  const fetchOne = async (id) => item.value = await makeRequest(`${baseURL}/${id}`)

  return {
    items,
    fetchAll,
    item,
    fetchOne
  }
}
