// api/helloWorld?hello=world&color=blue
export default defineEventHandler((event) => {
  return {
    message: getQuery(event),
  }
})
