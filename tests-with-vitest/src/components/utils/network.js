export async function getPostBody(id) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/post/${id}`
  ).then(r => r.json())

  return data.body
}
