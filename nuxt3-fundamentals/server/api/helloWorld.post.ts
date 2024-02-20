// curl -d '{"teste": "post"}' -X POST 
// -H "Content-Type: application/json" http://localhost:3000/api/helloWorld
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return {
    message: body,
  }
})
